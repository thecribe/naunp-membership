import React, { Fragment } from "react";
import Logo from "../Logo";
import HeaderNav from "./HeaderNav";
import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      <section className="bg-blue-950 w-full text-white ">
        <div className="section_center py-5 flex justify-center items-center">
          <div className="w-1/4 flex justify-start">
            <Logo />
          </div>
          <div className="w-2/4 flex justify-center">
            <HeaderNav />
          </div>
          <div className="w-1/4 flex justify-end">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Header;
