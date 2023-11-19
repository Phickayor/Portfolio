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
  const mobilelangs = [
    "bootstrap",
    "css",
    "git",
    "js",
    "tailwind",
    "ts",
    "react",
    "next",
    "wordpress"
  ];
  return (
    <div className="bg-[url('/images/blurs/bg.png')] border-2 border-[#000AFF] mx-auto w-11/12 md:w-10/12 bg-cover rounded-3xl p-4 md:p-10 flex flex-wrap md:gap-6 justify-center">
      {langs.map((lang) => (
        <img
          src={`/images/icons/${lang}.png`}
          alt="lang"
          className="self-center hidden md:block"
        />
      ))}
      {mobilelangs.map((lang) => (
        <img
          src={`/images/icons/${lang}.png`}
          alt="lang"
          className="md:hidden self-center scale-75 md:scale-100"
        />
      ))}
    </div>
  );
}

export default Languages;
