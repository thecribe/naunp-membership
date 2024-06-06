import React, { Fragment } from "react";
import MembershipApplication from "./ui/MembershipApplication";

const page = () => {
  return (
    <Fragment>
      <section className="py-10">
        <section className="section_center flex flex-col gap-5">
          <MembershipApplication />
        </section>
      </section>
    </Fragment>
  );
};

export default page;
