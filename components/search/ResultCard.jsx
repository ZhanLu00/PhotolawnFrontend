import { Col, Icon, Rate, Row, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const { Title } = Typography;

export default () => (
  <Card>
    <Row gutter={16}>
      <Col span={6}>
        <Image src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
      </Col>
      <Col span={18}>
        <PositionText>Verified Freelancer</PositionText>
        <Title style={{ margin: 0 }} level={4}>
          William Lauzon Photography
        </Title>
        <div>
          <Icon type="environment" /> Serves Toronto, ON
        </div>
        <Review>
          <Rate
            style={{ fontSize: "12px", marginRight: "10px" }}
            disabled
            defaultValue={4}
          />
          <span style={{ fontSize: "12px" }}>Based on 26 reviews</span>
        </Review>
        <Price>
          <h3>Packages starting at $130 CAD</h3>
        </Price>
      </Col>
    </Row>
  </Card>
);

const Card = styled.div`
  width: 600px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
`;

const Image = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
`;

const PositionText = styled.span`
  text-transform: uppercase;
  color: rgb(118, 118, 118);
  font-size: 12px;
  font-weight: 700;
`;

const Review = styled.div``;

const Price = styled.div`
  margin-top: 10px;
`;
