import {
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Typography
} from "antd";
import React from "react";
import LocationSelect from "../../../components/studio/LocationSelect";

const { Title, Text } = Typography;

export default () => (
  <React.Fragment>
    <Title level={2}>New Wedding Package</Title>
    <Form>
      <Form.Item label="Name">
        <Input placeholder="Deluxe Wedding Package" />
      </Form.Item>
      <Form.Item label="Price">
        <InputNumber min={10} max={10000} size="large" />
        <br />
        <Text type="secondary">
          You earn what you ask for. Photolawn takes 0%.
        </Text>
      </Form.Item>
      <Divider />
      <Form.Item label="What's included:">
        <Checkbox.Group>
          <Row>
            <Col span={12}>
              <Checkbox value="A">Pre-Session Consultation</Checkbox>
            </Col>
            <Col span={12}>
              <Checkbox value="B">Make Up Help</Checkbox>
            </Col>
            <Col span={12}>
              <Checkbox value="C">Toys for Children</Checkbox>
            </Col>
            <Col span={12}>
              <Checkbox value="D">Costumes</Checkbox>
            </Col>
            <Col span={12}>
              <Checkbox value="E">Hair Gels</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Divider />
      <Form.Item label="Location">
        <LocationSelect />
      </Form.Item>
    </Form>
  </React.Fragment>
);
