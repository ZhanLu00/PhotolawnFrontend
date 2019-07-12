import React from "react";
import Card from "./Card";

const Select = props => {
  const { data, onChange } = props;

  const onClickCard = title => {
    onChange(title);
  };

  return (
    <React.Fragment>
      {data.map(item => {
        return (
          <Card key={item.title} title={item.title} details={item.details} />
        );
      })}
    </React.Fragment>
  );
};

export default Select;
