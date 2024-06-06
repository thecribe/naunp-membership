"use client";
import React, { Fragment, useState } from "react";
import SearchFilter from "./SearchFilter";
import MembersList from "./MembersList";

const Members = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Fragment>
      <div className="flex flex-col gap-5">
        <SearchFilter searchHandler={(input) => setSearchInput(input)} />
        <MembersList searchInput={searchInput} />
      </div>
    </Fragment>
  );
};

export default Members;
