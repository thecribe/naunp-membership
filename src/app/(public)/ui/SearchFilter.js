"use client";
import React, { Fragment, useState } from "react";

const SearchFilter = ({ searchHandler }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Fragment>
      <div className="bg-white shadow-sm rounded-sm p-5 flex items-center justify-end gap-10">
        <div className="flex flex-col gap-2 w-1/3">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter member's name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="text-sm p-3 bg-gray-100 rounded-sm w-full outline-none border-2 border-gray-100"
          />
        </div>
        <div>
          <button
            className="text-sm bg-blue-950 rounded-sm p-3 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm disabled:scale-[1] disabled:bg-gray-100 disabled:text-gray-200 disabled:shadow-none px-10"
            onClick={() => searchHandler(searchInput)}
          >
            Search
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchFilter;
