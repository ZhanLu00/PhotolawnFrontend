import { Form, Input } from "antd";
import React from "react";

const ProfilePage = () => {
  return (
    <React.Fragment>
      <h1>your profile</h1>
      <Form>
        <Form.Item label="First Name">
          <Input />
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default ProfilePage;
