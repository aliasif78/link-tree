"use client";

// React
import React, { useState } from "react";

// Next Js
import Image from "next/image";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

// Toasts
import { toast } from "react-toastify";

const Generate = () => {
  // Hooks
  const searchParams = useSearchParams();

  // States
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [newLinks, setNewLinks] = useState([]);
  const [pictureUrl, setPictureUrl] = useState("");

  const addLink = async (e) => {
    e.preventDefault();

    // Check if all the fields are present
    if (link === "" || name === "") {
      toast.error("Please provide all fields.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    // Check if the name already exists
    const nameExists = newLinks.some((x) => x.name === name);

    if (nameExists) {
      toast.error("Name already exists.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    // Check if the link already exists
    const linkExists = newLinks.some((x) => x.link === link);

    if (linkExists) {
      toast.error("Link already exists.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    // Link was correct
    setNewLinks([...newLinks, { name, link }]);
  };

  const addLinktree = async () => {
    if (newLinks.length === 0) {
      toast.error("Please add atleast one link.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        handle: handle,
        pictureUrl: pictureUrl,
        links: newLinks,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const fetchRes = await fetch("http://localhost:3000/api/add-link-tree", requestOptions);
      const res = await fetchRes.json();

      if (res.success) {
        // Reset the whole form
        setHandle("");
        setName("");
        setLink("");
        setPictureUrl("");
        setNewLinks([]);

        toast.success(res.message, {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error(res.error, {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);

      toast.error("Error adding link.", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <main className="flex flex-row w-[100vw] h-[100vh] mt-[6rem]">
      <section className="flex flex-col gap-[2rem] w-[50vw] h-full p-[5rem]">
        <h1 className="text-3xl font-black">Create your Linktree</h1>

        <Form action={addLinktree} className="flex flex-col gap-[2rem] ml-[2rem]">
          <div className="flex flex-col gap-2">
            <label htmlFor="handle" className="text-lg">
              Step 1: Claim your handle
            </label>
            <input id="handle" name="handle" type="text" value={handle} onChange={(e) => setHandle(e.target.value)} className="rounded-full w-[20rem] bg-neutral-200 text-neutral-800 px-4 py-2" placeholder="Choose a handle" />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="handle" className="text-lg">
                Step 2: Add links
              </label>

              <div className="flex flex-row gap-2 items-center">
                <input id="handle" name="handle" type="text" value={name} onChange={(e) => setName(e.target.value)} className="rounded-full w-[10rem] bg-neutral-200 text-neutral-800 px-4 py-2" placeholder="Enter the name" />
                <input id="handle" name="handle" type="text" value={link} onChange={(e) => setLink(e.target.value)} className="rounded-full w-[10rem] bg-neutral-200 text-neutral-800 px-4 py-2" placeholder="Enter the link" />

                <button type="button" onClick={addLink} className="bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md px-4 py-2 text-center flex flex-row gap-2 items-center text-white w-fit">
                  Add
                </button>
              </div>
            </div>

            <div className="flex flex-row w-[25rem] rounded-lg items-center bg-neutral-200 p-[1rem]">
              <div className="flex flex-col w-[50%] items-center">
                <p className="font-bold">Name</p>

                {/* Map the link names here */}
                {newLinks.map((link, index) => (
                  <p key={index}>
                    {link.name.slice(0, 10)}
                    {link.name.length > 10 && "..."}
                  </p>
                ))}
              </div>

              <div className="flex flex-col w-[50%] items-center">
                <p className="font-bold">Link</p>

                {/* Map the links here */}
                {newLinks.map((link, index) => (
                  <p key={index}>
                    {link.link.slice(0, 10)}
                    {link.link.length > 10 && "..."}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="handle" className="text-lg">
              Step 3: Add a picture & finalize
            </label>
            <input id="handle" name="handle" type="text" value={pictureUrl} onChange={(e) => setPictureUrl(e.target.value)} className="rounded-full w-[20rem] bg-neutral-200 text-neutral-800 px-4 py-2" placeholder="Enter the link to your picture" />
          </div>

          <button type="submit" className="bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md px-4 py-2 mt-2 text-center flex flex-row gap-2 items-center text-white w-fit">
            Submit
          </button>
        </Form>
      </section>

      <section className="flex flex-col gap-[2rem] w-[50vw] h-full p-[5rem]">
        <Image src="/pc.webp" width={450} height={450} className="cursor-pointer" alt="logo" />
      </section>
    </main>
  );
};

export default Generate;
