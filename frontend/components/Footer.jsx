import React from "react";

function Footer() {
  return (
    <div className=" py-5 flex justify-center [&>*]:scale-90 lg:gap-6">
      <a
        href="https://github.com/Phickayor"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/Github.png"
          alt="github"
          className="w-16 lg:w-fit"
        />
      </a>

      <a
        href="https://twitter.com/determined_dev"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/TwitterX.png"
          alt="twitter"
          className="w-16 lg:w-fit"
        />
      </a>
      <a
        href="https://instagram.com/web___craft"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/Instagram.png"
          alt="instagram"
          className="w-16 lg:w-fit"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/olufikayomi-jetawo/"
        className=" hover:text-purple-200 self-center hover:scale-100 duration-300 "
      >
        <img
          src="/images/icons/Linkedin.png"
          alt="linkedin"
          className="w-16 lg:w-fit"
        />
      </a>
    </div>
  );
}

export default Footer;
