import React from "react";

function Training() {
  return (
    <div className="py-5 ">
      <h1
        className="text-2xl leading-loose md:text-4xl md:leading-relaxed text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        TRAINING THE NEXT <br /> GENERATION OF GENIUSES
      </h1>

      <video
        src="/videos/training.mp4"
        controls
        muted
        autoPlay={true}
        loop
        className="mx-auto w-11/12 aspect-video py-6 object-cover"
      ></video>
    </div>
  );
}

export default Training;
