import React from "react";

const Footer = () => {
  return (
    <div className="py-6 bg-[#00000f]">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-center text-white">
          &copy;All Rights Reserved. Designed by{" "}
          <span className="text-cyan-600">
            <a
            target="blank"
              className="underline"
              href="https://www.linkedin.com/in/developerfahad/"
            >
              developerfahad
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
