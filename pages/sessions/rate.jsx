import { Button, Input, Rate } from "antd";
import React from "react";
import FilterTag from "../../components/search/FilterTag";

const { TextArea } = Input;

const RatePage = () => {
  return (
    <React.Fragment>
      <h1>Rate William Lauzon Photography</h1>
      <h2>How would you describe the service?</h2>
      <FilterTag>Great Skills</FilterTag>
      <FilterTag>Very Patient</FilterTag>
      <FilterTag>Kids love them</FilterTag>
      <h2>Rate by Category:</h2>
      <div>
        Overall Experience: <Rate />
      </div>
      <div>
        Skill: <Rate />
      </div>
      <div>
        Punctuality: <Rate />
      </div>
      <div>
        Patience: <Rate />
      </div>
      <div>
        Communication: <Rate />
      </div>
      <h2>Write a comment:</h2>
      <TextArea rows={4} />
      <Button primary>Submit</Button>
    </React.Fragment>
  );
};

export default RatePage;
