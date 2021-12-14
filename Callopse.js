import React from "react";

const Callopse = (props) => {
  console.log(props.children);
  return (
    <div>
      <a
        className="btn btn-primary"
        data-toggle="callopse"
        href={"#".concat(props.href)}
        role="button"
        aria-expanded="false"
        aria-controls="callopseExample"
      >
        Link with href
      </a>

      <div className="callopse" id={props.href}>
        {props.children}
      </div>
    </div>
  );
};

export default Callopse;
