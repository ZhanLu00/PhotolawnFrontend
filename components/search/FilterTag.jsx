import { Tag } from 'antd';
import React, { useState } from 'react';

const { CheckableTag } = Tag;

export default (props) => {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <CheckableTag
      {...props}
      checked={checked}
      onChange={() => handleChange()}
    />
  );
};
