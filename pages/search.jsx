import React from "react";
import styled from "styled-components";
import CategoryCard from "../components/search/CategoryCard";
import ResultCard from "../components/search/ResultCard";

const SearchPage = () => (
  <React.Fragment>
    <CategoryHero
      className="pl-full-width"
      image="https://images.unsplash.com/photo-1562887106-0ba63ac82e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80"
    />
    <h3 className="uk-margin-medium-top uk-margin-remove-bottom">
      New Born and Baby Photography
    </h3>
    <div className="uk-text-meta uk-margin-remove-top">
      Create a lasting memory for yourself and your family with our select
      professional studios.
    </div>

    <h4 className="uk-margin-medium-top">Filter by style</h4>
    <div className="uk-flex">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>

    <h4 className="uk-margin-medium-top">Top studios near you</h4>
    <ResultCard />
    <ResultCard />
    <ResultCard />
  </React.Fragment>
);

export default SearchPage;

// const Filters = styled.div`
//   padding: 15px 100px 15px 100px;
//   border-bottom: 1px solid #ddd;
//   margin: -50px -100px 0px -100px;
// `;

const Results = styled.div`
  margin-top: 20px;
`;

const CategoryHero = styled.div`
  background-image: url("${props => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
`;
