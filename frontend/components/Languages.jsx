import React from "react";

function Languages() {
  const langs = [
    "bootstrap",
    "css",
    "git",
    "js",
    "tailwind",
    "ts",
    "react",
    "next",
    "wordpress",
    "node",
    "express",
    "mongodb",
    "sql"
  ];
  return (
    <div className="bg-[url('/images/blurs/bg.png')] border-2 border-[#000AFF] mx-auto w-10/12 bg-cover rounded-3xl p-10 flex flex-wrap gap-6 justify-center">
      {langs.map((lang) => (
        <img src={`/images/icons/${lang}.png`} alt="lang" className="self-center"/>
      ))}
    </div>
  );
}

export default Languages;
