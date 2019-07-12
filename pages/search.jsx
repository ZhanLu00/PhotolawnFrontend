import React from "react";
import styled from "styled-components";
import FilterTag from "../components/search/FilterTag";
import ResultCard from "../components/search/ResultCard";

const SearchPage = () => (
  <React.Fragment>
    <Filters>
      <span style={{ marginRight: "20px" }}>Refine your search:</span>
      <FilterTag>Photolawn Verified</FilterTag>
      <FilterTag>Professionals</FilterTag>
      <FilterTag>Freelancers</FilterTag>
      <FilterTag>Studios</FilterTag>
    </Filters>
    <Results>
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </Results>
  </React.Fragment>
);

export default SearchPage;

const Filters = styled.div`
  padding: 15px 100px 15px 100px;
  border-bottom: 1px solid #ddd;
  margin: -50px -100px 0px -100px;
`;

const Results = styled.div`
  margin-top: 20px;
`;
