import React from "react";

function NavBar() {
  return (
    <div className="sticky top-0 backdrop-blur-md z-20 flex justify-between lg:text-xl py-3 md:py-5 my-4 md:my-8 px-5 border-b-2">
      <h1 className="self-center">Fikayo</h1>
      <a href="tel:+2347031041271" className="bg-blue text-black p-2 px-6 rounded-lg">
       Call Me !
      </a>
    </div>
  );
}

export default NavBar;
