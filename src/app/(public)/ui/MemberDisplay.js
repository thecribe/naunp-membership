"use client";
import { profileHandler } from "@/app/utils/FormSubmission";
import Card from "@/components/Card";
import PageCount from "@/components/PageCount";
import React, { Fragment, useEffect, useState } from "react";

const MemberDisplay = ({ displayHandler }) => {
  const [toShow, setToShow] = useState(12);
  const [pageFilter, setPageFilter] = useState({ start: 1, end: toShow });

  const pageCountHandler = (start, end) => {
    if (pageFilter.start !== start) {
      setPageFilter({ ...pageFilter, start, end });
    }
  };

  useEffect(() => {
    profileHandler(displayHandler);
  }, [displayHandler]);
  return (
    <Fragment>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full flex items-center justify-end gap-5 p-5 bg-white">
          <p className="text-sm">Members per page:</p>
          <input
            className="p-2 outline-none border-2 w-[100px]"
            min={4}
            type="number"
            id="showPerPage"
            onChange={(e) => setToShow(+e.target.value)}
            value={toShow}
          />
        </div>
        <div className="flex gap-5 flex-wrap py-5 justify-start w-full">
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
          <div className="w-[23%]">
            <Card>
              <div className="flex flex-col gap-2">
                <div className="  w-[full] h-[200px]">
                  <img
                    src="/img/placeholder.png"
                    alt="Start"
                    className="object-cover w-full h-full rounded-sm"
                  />
                </div>
                <h2 className="font-bold text-sm text-center text-blue-950">
                  Professor james
                </h2>
                <p className="text-xs text-center">james@gmail.com</p>
              </div>
            </Card>
          </div>
        </div>
        <PageCount total={30} toShow={toShow} func={pageCountHandler} />
      </div>
    </Fragment>
  );
};

export default MemberDisplay;
