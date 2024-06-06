import LoginForm from "@/components/LoginForm";
import React, { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <section className="h-[85vh] w-full flex justify-center items-center">
        <div className="section_center flex justify-center items-center">
          <div className="bg-white w-full md:w-3/4 p-2 md:p-5 md:py-10 shadow-sm flex ">
            <div className="w-full lg:w-1/2 p-2 md:p-5 lg:p-10 flex flex-col gap-10 justify-center items-center ">
              <div className="w-2/3 flex justify-center gap-5 flex-col items-center">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl text-center">Admin Login Portal</h2>
                  <p className="text-sm text-center">
                    Please Enter Your Login Access
                  </p>
                </div>
              </div>
              <LoginForm />
            </div>
            <div className="hidden  lg:w-1/2 lg:flex justify-center h-[50vh] ">
              <div className=" w-full relative h-[full]">
                <div className=" absolute top-5 left-[50%] w-[200px] h-[200px] -translate-x-[50%] ">
                  <img
                    src="/img/naunp1.jpg"
                    alt="Start"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className=" absolute top-[45%] left-[50%] w-[150px] h-[150px] -translate-x-[50%] ">
                  <img
                    src="/img/naunp2.jpg"
                    alt="Start"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <div className=" absolute bottom-[5%] left-[50%] w-[100px] h-[100px] -translate-x-[50%]  ">
                  <img
                    src="/img/naunp3.jpg"
                    alt="Start"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default page;
