import React from "react";
export default function Hero() {
  return (
    <div className="w-full pb-10 lg:pb-20 flex flex-col md:flex-row justify-center gap-10">
      <h1 className="text-6xl text-center md:text-left order-2 md:order-1 md:text-[90px] md:leading-[100px] lg:text-[150px] lg:leading-[150px] font-megrim">
        SOFTWARE <br />
        <span className="text-orange">DEV</span>ELOPER
      </h1>
      <img
        src="/images/me.png"
        className="object-cover self-center order-1 md:order-2"
      />
    </div>
  );
}
