import React from "react";

function NavBar() {
  return (
    <div className="sticky top-0 backdrop-blur-md z-20 flex justify-between lg:text-xl py-5 my-8 px-5 border-b-2">
      <h1 className="self-center">Fikayo</h1>
      <button className="bg-blue text-black p-2 px-6 rounded-lg">
        Book a call
      </button>
    </div>
  );
}

export default NavBar;
