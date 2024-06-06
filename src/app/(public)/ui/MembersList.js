"use client";
import React, { Fragment, useState } from "react";
import MemberFilter from "./MemberFilter";
import MemberDisplay from "./MemberDisplay";

const MembersList = ({ searchInput }) => {
  const [filterArray, setfilterArray] = useState([]);

  return (
    <Fragment>
      <div className="flex gap-5">
        <div className=" w-1/4 shadow-sm ">
          <MemberFilter filterHandler={(input) => setfilterArray([...input])} />
        </div>
        <div className=" w-3/4 shadow-sm">
          <MemberDisplay
            displayHandler={{ filter: [...filterArray], searchInput }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MembersList;
