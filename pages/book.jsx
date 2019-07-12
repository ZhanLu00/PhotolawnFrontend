import {
  Alert,
  Button,
  Col,
  Divider,
  Icon,
  List,
  message,
  Row,
  Steps
} from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import PackageCard from "../components/book/PackageCard";

const { Step } = Steps;

const steps = [
  {
    title: "Select Package",
    content: "First-content"
  },
  {
    title: "Choose Add-ons",
    content: "Second-content"
  },
  {
    title: "Confirm and Pay",
    content: "Last-content"
  }
];

export default () => {
  const [current, setCurrent] = useState(0);
  return (
    <Row>
      <Col span={14}>
        <React.Fragment>
          <Steps current={current}>
            {steps.map(step => (
              <Step key={step.title} title={step.title} />
            ))}
          </Steps>
          <div>
            <h2>Select a Wedding Photography Package</h2>
            <h3>William Lauzon offers the following 4 packages:</h3>
            <PackageCard title="Deluxe" price={120} />
            <PackageCard title="Deluxe" price={120} />
          </div>
          <div>
            <h3>Pre-Session Preparation</h3>
            <Alert
              message="William will call you by tonight"
              description="William Lauzon will call you at +17788929160 by Monday to discuss the details of the booking."
              type="info"
              icon={<Icon type="phone" />}
              showIcon
            />
          </div>
          <div>
            <h3>William also suggest the following:</h3>
            <div>just be natural!</div>
          </div>
          <div>
            {current > 0 && (
              <Button onClick={() => setCurrent(current - 1)}>Previous</Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => setCurrent(current + 1)}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
          </div>
        </React.Fragment>
      </Col>
      <Col span={8} offset={2}>
        <Card>
          <h3>William Lauzon Photography</h3>
          <text>Wedding Photography Service</text>
          <Divider />
          <List
            split={false}
            size="small"
            dataSource={[
              { title: "Deluxe Package", price: 1500 },
              { title: "Service Fee", price: 20 }
            ]}
            renderItem={item => (
              <List.Item key={item.title}>
                <List.Item.Meta title={item.title} />
                <div>${item.price}</div>
              </List.Item>
            )}
          />
          <Divider />
          <List
            split={false}
            size="small"
            dataSource={[
              { title: "Due now", price: 200 },
              { title: "Due on September 25, 2019", price: 700 }
            ]}
            renderItem={item => (
              <List.Item key={item.title}>
                <List.Item.Meta title={item.title} />
                <div>${item.price}</div>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

const Card = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  border: 1px solid #e6ecf1;
  padding: 10px 20px 10px 20px;
  margin-bottom: 10px;
`;
