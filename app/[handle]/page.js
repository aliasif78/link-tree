import clientPromise from "@/app/lib/mongodb";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;

  // Connect to the database
  const client = await clientPromise;
  const db = client.db("Linktree");
  const collection = db.collection("Linktrees");

  // Find the user with the handle
  const user = await collection.findOne({ handle });

  if (!user) return notFound();

  return (
    <main className="flex flex-col w-full justify-center items-center mt-[10rem] gap-[2rem]">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <img src={user.pictureUrl} alt="img" className="rounded-full w-[10rem] h-[10rem]" />
        <h1 className="text-2xl font-bold">{handle}</h1>
      </div>

      <div className="flex flex-col gap-[1rem]">
        {user.links.map((link, index) => (
          <Link href={link.link} key={index} className="flex flex-row gap-2 items-center justify-center text-center px-[3rem] py-[1rem] bg-purple-200 hover:bg-purple-300 transition duration-200 rounded-lg w-[25rem]">
            {link.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
