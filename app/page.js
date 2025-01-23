"use client";

// React
import React, { useState } from "react";

// Next Js
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [url, setUrl] = useState("linktr.ee/");
  const router = useRouter();

  const goToGenerate = () => {
    let link = url;

    if (url === "linktr.ee/") link = "";
    else if (url.startsWith("linktr.ee/")) link = url.replace("linktr.ee/", "?handle=");

    router.push(`/generate${link}`);
  };

  return (
    <main className="flex flex-row w-[100vw] h-[100vh] mt-[7rem]">
      <section className="flex flex-col gap-[2rem] w-[50vw] h-full p-[5rem]">
        <h1 className="text-6xl font-black">Everything you are. In one, simple link in bio.</h1>

        <p>Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

        <div className="flex flex-row gap-4">
          <input type="text" value={url} onChange={(e) => setUrl(`${e.target.value}`)} className="rounded-lg bg-neutral-200 text-neutral-800 placeholder:text-neutral-800 px-4" placeholder="linktr.ee/yourname" />
          <button onClick={goToGenerate} className="rounded-full text-neutral-800 bg-pink-200 hover:bg-pink-300 px-4 py-2">
            Claim your Linktree
          </button>
        </div>
      </section>

      <section className="flex flex-col gap-[2rem] w-[50vw] h-full p-[5rem]">
        <Image src="/laptop.webp" width={450} height={450} className="cursor-pointer" alt="logo" />
      </section>
    </main>
  );
}
