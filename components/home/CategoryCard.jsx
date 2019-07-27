import React from "react";
import styled from "styled-components";

const CategoryCard = ({ title, image }) => {
  return (
    <div>
      <CardContainer className="uk-inline" image={image}>
        <div className="uk-position-bottom">
          <h5 className="uk-text-bold" style={{ color: "white" }}>
            {title}
          </h5>
        </div>
      </CardContainer>
    </div>
  );
};

export default CategoryCard;

const CardContainer = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 3px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.72)
    ),
    url("${props => props.image}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
