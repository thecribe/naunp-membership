import React, { Fragment } from "react";

const Card = ({ children, width }) => {
  return (
    <Fragment>
      <div className={` w-[full]  shadow-sm p-3 rounded-sm bg-white`}>
        {children}
      </div>
    </Fragment>
  );
};

export default Card;
