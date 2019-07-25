import React from "react";

const HeadingLine = ({ children }) => {
  return (
    <h4 className="uk-heading-line">
      <span>{children}</span>
    </h4>
  );
};

export default HeadingLine;
