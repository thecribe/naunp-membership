import React, { Fragment } from "react";
import Members from "./ui/Members";

const page = () => {
  return (
    <Fragment>
      <section className="py-10">
        <section className="section_center">
          <Members />
        </section>
      </section>
    </Fragment>
  );
};

export default page;
