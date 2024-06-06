import React, { Fragment } from "react";
import MembershipForm from "./MembershipForm";

const MembershipApplication = () => {
  return (
    <Fragment>
      <div className="bg-white p-5">
        <h1 className="text-xl font-semibold text-blue-900">
          NAUNP Membership Registration Form
        </h1>
      </div>
      <div className="bg-white p-5 flex flex-col gap-7">
        <MembershipForm />
      </div>
    </Fragment>
  );
};

export default MembershipApplication;
