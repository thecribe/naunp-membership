import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="w-full " href="#">
      <div className="w-1/2 ">
        <img
          src="/img/newnaunp.png"
          alt="Naunp Logo"
          className="object-cover w-full h-full"
        />
      </div>
    </Link>
  );
};

export default Logo;
