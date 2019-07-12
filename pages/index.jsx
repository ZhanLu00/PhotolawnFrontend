import { Col, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import data from "./category";

const { Title } = Typography;

const HomePage = () => {
  return (
    <React.Fragment>
      <Row type="flex" justify="center">
        <Col>
          <Title level={3}>
            Find professional photographers for any occasion
          </Title>
        </Col>
      </Row>
      <Row type="flex" justify="center" gutter={8}>
        {data.map((category, index) => {
          return (
            <Col span={6}>
              <CategoryCard image={category.image}>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryCard>
            </Col>
          );
        })}
      </Row>
    </React.Fragment>
  );
};

export default HomePage;

const CategoryCard = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 3px;
  padding-bottom: 20px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.72)
    ),
    url(${props => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CategoryTitle = styled.div`
  position: absolute !important;
  text-align: center !important;
  padding-right: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  font-weight: 700;
`;
