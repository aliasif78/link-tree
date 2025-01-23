import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    // Check if all the required fields are present
    if (!body.handle || !body.pictureUrl || !body.links) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        { status: 400 } // Bad Request
      );
    }

    // Connect to the database
    const client = await clientPromise;
    const db = client.db("Linktree");
    const collection = db.collection("Linktrees");

    // Check if the handle already exists
    const handleExists = await collection.findOne({ handle: body.handle });

    if (handleExists) {
      return new Response(
        JSON.stringify({ success: false, error: "Handle already exists." }),
        { status: 409 } // Conflict
      );
    }

    // Insert the new link into the database
    const res = await collection.insertOne(body);

    // Successfully added the new Linktree
    return new Response(
      JSON.stringify({ success: true, message: "Linktree added." }),
      { status: 201 } // Created
    );
  } catch (error) {
    console.error(error);

    // Internal Server Error for unexpected errors
    return new Response(
      JSON.stringify({ success: false, error: "Internal Server Error" }),
      { status: 500 } // Internal Server Error
    );
  }
}
