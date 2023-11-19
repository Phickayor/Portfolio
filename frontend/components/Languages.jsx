import React from "react";

function Languages() {
  const langs = [
    "bootstrap",
    "css",
    "git",
    "html",
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
  const mobilelangs = [
    "bootstrap",
    "css",
    "git",
    "html",
    "js",
    "tailwind",
    "ts",
    "react",
    "next",
    "wordpress"
  ];
  return (
    <div className="bg-[url('/images/blurs/bg.png')] border-2 border-[#000AFF] mx-auto w-11/12 bg-cover rounded-3xl p-4 md:p-10 flex flex-wrap gap-4 md:gap-6 justify-center">
      {langs.map((lang, index) => (
        <img
          src={`/images/icons/${lang}.png`}
          alt="lang"
          className="self-center w-12 md:w-fit h-max block"
          key={index}
        />
      ))}
    </div>
  );
}

export default Languages;
