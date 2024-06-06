"use client";
import React, { Fragment, useRef, useState } from "react";

const MemberFilter = ({ filterHandler }) => {
  const [filterArray, setfilterArray] = useState([]);

  const checkHandler = (input) => {
    if (input.checked && !filterArray.includes(input.value)) {
      let array = [...filterArray, input.value];
      filterHandler(array);
      setfilterArray([...filterArray, input.value]);
    } else {
      let array = [...filterArray];
      const index = array.indexOf(input.value);
      if (index > -1) {
        array.splice(index, 1);
      }
      filterHandler(array);
      setfilterArray(array);
    }
  };

  return (
    <Fragment>
      <div className="bg-white p-5">
        <div className="border-b-2 border-gray-100 my-5">
          <h3 className="font-bold text-sm text-blue-900 my-5">
            Filter By Institution
          </h3>
        </div>
        <div className="flex flex-col gap-5 py-5">
          <div className="flex gap-2  items-center">
            <input
              type="checkbox"
              id="inst1"
              value="OAU"
              onChange={(e) => checkHandler(e.target)}
            />
            <p className="text-sm text-gray-500">Obafemi Awolowo University</p>
          </div>
          <div className="flex gap-2  items-center">
            <input
              type="checkbox"
              id="inst2"
              value="ilorin"
              onChange={(e) => checkHandler(e.target)}
            />
            <p className="text-sm text-gray-500">University of Ilorin</p>
          </div>
          <div className="flex gap-2  items-center">
            <input
              type="checkbox"
              id="inst3"
              value="babcock"
              onChange={(e) => checkHandler(e.target)}
            />
            <p className="text-sm text-gray-500">BabCock University</p>
          </div>
          <div className="flex gap-2  items-center">
            <input
              type="checkbox"
              id="inst4"
              value="afe"
              onChange={(e) => checkHandler(e.target)}
            />
            <p className="text-sm text-gray-500">Afe Babalola university</p>
          </div>
          <div className="flex gap-2  items-center">
            <input
              type="checkbox"
              id="inst5"
              value="UniIB"
              onChange={(e) => checkHandler(e.target)}
            />
            <p className="text-sm text-gray-500">University of Ibadan</p>
          </div>
          <div className="flex gap-2  items-center">
            <input
              type="checkbox"
              id="inst9"
              value="futa"
              onChange={(e) => checkHandler(e.target)}
            />
            <p className="text-sm text-gray-500">FUTA</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MemberFilter;
