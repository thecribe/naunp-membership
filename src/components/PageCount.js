"use client";
import React, { Fragment, useEffect, useState } from "react";

const PageCount = ({ total, toShow, func }) => {
  let endNumber =
    total % toShow > 0 ? Math.ceil(total / toShow) : total / toShow;

  let numberStart = 1;
  let numberEnd = toShow;
  const [active, setActive] = useState({
    navNumber: 1,
    start: numberStart,
    end: numberEnd,
  });

  let numberObj = [];

  for (let i = 1; i <= endNumber; i++) {
    numberObj.push({ navNumber: i, start: numberStart, end: numberEnd });
    numberStart = numberEnd + 1;
    numberEnd = numberEnd + toShow;
  }

  let count = 0;
  let numberListOutput;

  useEffect(() => {
    func(active.start, active.end);
  }, [active]);

  numberListOutput = numberObj.map((num, i) => {
    let output;
    if (count < 15) {
      if (active.navNumber >= 15 && i >= active.navNumber - 15) {
        output = (
          <div
            key={i}
            onClick={() => {
              setActive({ ...num });
            }}
            className={`cursor-pointer w-[30px] h-[30px] flex justify-center items-center text-blue-800  hover:bg-blue-800 hover:text-white transition_class ${
              active.navNumber === num.navNumber && "bg-blue-800 text-white"
            }`}
          >
            <p>{num.navNumber}</p>
          </div>
        );
        count++;
      } else if (active.navNumber < 15) {
        output = (
          <div
            key={i}
            onClick={() => {
              setActive({ ...num });
            }}
            className={`cursor-pointer w-[30px] h-[30px] flex justify-center items-center text-black  hover:bg-blue-950 hover:text-white transition_class ${
              active.navNumber === num.navNumber &&
              "border-blue-950 text-white border-2"
            }`}
          >
            <p>{num.navNumber}</p>
          </div>
        );
        count++;
      }
    }

    return output;
  });

  const navHandler = (type) => {
    const newActive = { ...active };
    if (type === "backward" && active.navNumber > 1) {
      setActive({
        ...active,
        navNumber: newActive.navNumber - 1,
        start: newActive.start - toShow,
        end: newActive.end - toShow,
      });
    } else if (type === "forward" && active.navNumber < numberObj.length) {
      setActive({
        ...active,
        navNumber: newActive.navNumber + 1,
        start: newActive.start + toShow,
        end: newActive.end + toShow,
      });
    }
  };

  return (
    <Fragment>
      <div className="flex gap-2 justify-center items-center">
        {active.navNumber > 1 && (
          <p
            className="cursor-pointer hover:border-2 border-blue-950 w-[30px] h-[30px] flex justify-center items-center"
            onClick={() => navHandler("backward")}
          >
            {"<"}
          </p>
        )}
        {numberListOutput}
        {active.navNumber < numberObj.length && (
          <p
            onClick={() => navHandler("forward")}
            className="cursor-pointer hover:border-2 border-blue-950 w-[30px] h-[30px] flex justify-center items-center"
          >
            {">"}
          </p>
        )}
      </div>
    </Fragment>
  );
};

export default PageCount;
