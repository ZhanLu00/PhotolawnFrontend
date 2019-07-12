import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

export default props => {
  const { title, price } = props;
  return (
    <Card>
      <Row type="flex" justify="space-around" align="middle">
        <Col span={8}>
          <h3>{title}</h3>
        </Col>
        <Col span={8} offset={8}>
          <h4>${price}</h4>
        </Col>
      </Row>
      <Details>
        <li>6 hours</li>
        <li>3 photographers</li>
        <li>100 photos</li>
        <li>10 digital retouch</li>
      </Details>
    </Card>
  );
};

const Card = styled.div`
  width: 200px;
  height: 150px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  border: 1px solid #e6ecf1;
  padding: 10px 20px 10px 20px;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
    border-color: blue;
  }
`;

const Details = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  li:before {
    content: "✓ ";
  }
`;
