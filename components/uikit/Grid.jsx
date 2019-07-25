import React from "react";

const Grid = ({ children, className }) => {
  return (
    <div data-uk-grid className={className}>
      {children}
    </div>
  );
};

export default Grid;
