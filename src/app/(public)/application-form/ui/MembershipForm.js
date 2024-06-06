import React, { Fragment } from "react";

const MembershipForm = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm px-3 font-semibold">Name:</p>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2 w-1/2">
            <input
              required={true}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter your firstname"
              //   value={formInput.email.input}
              //   onChange={(e) =>
              //     setFormInput({
              //       ...formInput,
              //       email: { ...formInput.email, input: e.target.value },
              //     })
              //   }
              className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
            />
            <p className="text-sm px-3">Firstname</p>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <input
              required={true}
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter your Lastname"
              //   value={formInput.email.input}
              //   onChange={(e) =>
              //     setFormInput({
              //       ...formInput,
              //       email: { ...formInput.email, input: e.target.value },
              //     })
              //   }
              className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
            />
            <p className="text-sm px-3">Lastname</p>
          </div>
        </div>
        {/* <p className="text-xs text-red-500">{formInput.email.errorMessage}</p> */}
      </div>
      <div className=" flex gap-5 w-full">
        <div className="flex flex-col gap-7 w-1/2">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm px-3 font-semibold">E-mail Address:</p>
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Enter your email address"
              //   value={formInput.email.input}
              //   onChange={(e) =>
              //     setFormInput({
              //       ...formInput,
              //       email: { ...formInput.email, input: e.target.value },
              //     })
              //   }
              className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
            />
            {/* <p className="text-xs text-red-500">{formInput.email.errorMessage}</p> */}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm px-3 font-semibold">Phone Number:</p>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              //   value={formInput.email.input}
              //   onChange={(e) =>
              //     setFormInput({
              //       ...formInput,
              //       email: { ...formInput.email, input: e.target.value },
              //     })
              //   }
              className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
            />
            {/* <p className="text-xs text-red-500">{formInput.email.errorMessage}</p> */}
          </div>
          <div className="w-full flex gap-5 items-center">
            <div className="w-1/2">
              <p className="text-sm px-3 font-semibold">Gender:</p>
              <div className="parent_dropdown flex justify-between text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100">
                <p>Please select your gender</p>
                <p>?</p>
                <div className="child_dropdown text-sm py-3 bg-gray-100  w-full outline-none border-2 border-gray-100">
                  <p className="text-sm p-3 hover:bg-white cursor-pointer smooth_transition">
                    Male{" "}
                  </p>
                  <p className="text-sm p-3 hover:bg-white cursor-pointer smooth_transition">
                    Female
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-sm px-3 font-semibold">Rank:</p>
              <div className="parent_dropdown flex justify-between text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100">
                <p>Please select your rank</p>
                <p>?</p>
                <div className="child_dropdown text-sm py-3 bg-gray-100  w-full outline-none border-2 border-gray-100">
                  <p className="text-sm p-3 hover:bg-white cursor-pointer smooth_transition">
                    Professor
                  </p>
                  <p className="text-sm p-3 hover:bg-white cursor-pointer smooth_transition">
                    Reader
                  </p>
                  <p className="text-sm p-3 hover:bg-white cursor-pointer smooth_transition">
                    Senior Lecturer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm px-3 font-semibold">
              University or Affiliation:
            </p>
            <div className="parent_dropdown flex justify-between text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100">
              <p>Please select your gender</p>
              <p>?</p>
              <div className="child_dropdown text-sm py-3 bg-gray-100  w-full outline-none border-2 border-gray-100">
                <p className="text-sm p-3 hover:bg-white cursor-pointer smooth_transition">
                  Male{" "}
                </p>
                <p className="text-sm p-3 hover:bg-white cursor-pointer smooth_transition">
                  Female
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>image</div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm px-3 font-semibold">
          Qualifications (Educational and Professional):
        </p>
        <div className="flex flex-col gap-5 border-2 border-dotted p-5 border-gray-200 ">
          <div className="flex flex-wrap gap-5 w-full items-center  ">
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-3/5">
            <input
              required={true}
              type="text"
              name="qualification"
              id="qualification"
              placeholder="Add qualification"
              //   value={formInput.email.input}
              //   onChange={(e) =>
              //     setFormInput({
              //       ...formInput,
              //       email: { ...formInput.email, input: e.target.value },
              //     })
              //   }
              className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
            />
            <button
              //   disabled={
              //     !(
              //       formInput.email.input.length > 0 &&
              //       formInput.password.input.length > 0
              //     )
              //   }
              className="text-sm bg-blue-950 rounded-md p-3 px-10 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm disabled:scale-[1] disabled:bg-gray-100 disabled:text-gray-200 disabled:shadow-none w-fit"
              //   onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
        {/* <p className="text-xs text-red-500">{formInput.email.errorMessage}</p> */}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm px-3 font-semibold">
          Area(s) of Nursing Specialization:
        </p>
        <div className="flex flex-col gap-5 border-2 border-dotted p-5 border-gray-200 ">
          <div className="flex flex-wrap gap-5 w-full items-center  ">
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-3/5">
            <input
              required={true}
              type="text"
              name="specialization"
              id="specialization"
              placeholder="Add Specialization"
              //   value={formInput.email.input}
              //   onChange={(e) =>
              //     setFormInput({
              //       ...formInput,
              //       email: { ...formInput.email, input: e.target.value },
              //     })
              //   }
              className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
            />
            <button
              //   disabled={
              //     !(
              //       formInput.email.input.length > 0 &&
              //       formInput.password.input.length > 0
              //     )
              //   }
              className="text-sm bg-blue-950 rounded-md p-3 px-10 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm disabled:scale-[1] disabled:bg-gray-100 disabled:text-gray-200 disabled:shadow-none w-fit"
              //   onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
        {/* <p className="text-xs text-red-500">{formInput.email.errorMessage}</p> */}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm px-3 font-semibold">Research Interests:</p>
        <div className="flex flex-col gap-5 border-2 border-dotted p-5 border-gray-200 ">
          <div className="flex flex-wrap gap-5 w-full items-center  ">
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
            <div className="flex gap-5 justify-between items-center p-3 rounded-sm border-2 border-gray-200">
              <p className="text-sm ">Lastname john james</p>
              <p className="text-sm font-bold cursor-pointer">x</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-3/5">
            <input
              required={true}
              type="text"
              name="interest"
              id="interest"
              placeholder="Add Research Interest"
              //   value={formInput.email.input}
              //   onChange={(e) =>
              //     setFormInput({
              //       ...formInput,
              //       email: { ...formInput.email, input: e.target.value },
              //     })
              //   }
              className="text-sm p-3 bg-gray-100 rounded-md w-full outline-none border-2 border-gray-100"
            />
            <button
              //   disabled={
              //     !(
              //       formInput.email.input.length > 0 &&
              //       formInput.password.input.length > 0
              //     )
              //   }
              className="text-sm bg-blue-950 rounded-md p-3 px-10 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm disabled:scale-[1] disabled:bg-gray-100 disabled:text-gray-200 disabled:shadow-none w-fit"
              //   onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
        {/* <p className="text-xs text-red-500">{formInput.email.errorMessage}</p> */}
      </div>
      <button
        //   disabled={
        //     !(
        //       formInput.email.input.length > 0 &&
        //       formInput.password.input.length > 0
        //     )
        //   }
        className="text-sm bg-blue-950 rounded-md p-3 text-white text-center transform  smooth_transition active:scale-[0.97] hover:shadow-md active:shadow-sm disabled:scale-[1] disabled:bg-gray-100 disabled:text-gray-200 disabled:shadow-none w-fit px-5"
        //   onClick={handleSubmit}
      >
        Submit Application
      </button>
    </Fragment>
  );
};

export default MembershipForm;
