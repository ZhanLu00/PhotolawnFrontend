import React from "react";
import styled from "styled-components";

const CategoryCard = () => {
  return (
    <div
      className="pl-style-card uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-right"
      data-uk-grid
    >
      <StyleImageContainer
        className="uk-card-media-left uk-cover-container"
        image="https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
      />
      <div>
        <div className="uk-card-body uk-padding-remove-vertical uk-position-center-right">
          Simple
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;

const StyleImageContainer = styled.div`
background-image: url("${props => props.image}");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 80px;
`;
