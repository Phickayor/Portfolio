import React from "react";
export default function Hero() {
  return (
    <div className="w-full py-20 flex justify-center gap-10">
      <h1 className="text-[150px] leading-[150px] font-megrim">
        SOFTWARE <br />
        <span className="text-orange">DEV</span>ELOPER
      </h1>
      <img src="/images/me.png" className="object-cover self-center" />
    </div>
  );
}
