"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

const HeaderNav = () => {
  const pathname = usePathname();

  return (
    <Fragment>
      <div className="flex justify-center items-center gap-5">
        <Link
          href="/"
          className={`${
            pathname === "/" && "nav_active"
          } hover:text-gray-300 smooth_transition`}
        >
          Member's Database
        </Link>
        <Link
          href="/application-form"
          className={`${
            pathname === "/application-form" && "nav_active"
          } hover:text-gray-300 smooth_transition`}
        >
          Application Form
        </Link>
        <Link
          href="/update-profile"
          className={`${
            pathname === "/update-profile" && "nav_active"
          } hover:text-gray-300 smooth_transition`}
        >
          Submit Update Request
        </Link>
      </div>
    </Fragment>
  );
};

export default HeaderNav;
