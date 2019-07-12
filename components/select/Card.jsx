import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

const SelectCard = props => {
  const { title, meta, details } = props;
  return (
    <Container>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={24}>
          <h3>{title}</h3>
        </Col>
        {meta && (
          <Col span={8} offset={8}>
            <h4>${meta}</h4>
          </Col>
        )}
      </Row>
      <Details>{details}</Details>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e6ecf1;
  padding: 10px 20px 10px 20px;
  margin-bottom: 10px;
`;

const Details = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  li:before {
    content: "✓ ";
  }
`;

export default SelectCard;
