/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Input, Layout, Row } from "antd";
import Link from "next/link";
import React from "react";

const { Header } = Layout;

const NavBar = props => {
  const { title } = props;
  return (
    <Header className="navBar">
      <Row gutter={16}>
        <Col span={4}>
          <Link href="/">
            <a>
              <h3>{title}</h3>
            </a>
          </Link>
        </Col>
        <Col span={16}>
          <Input placeholder="Wedding Photographer in Toronto" size="large" />
        </Col>
        <Col span={4}>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </Col>
      </Row>
    </Header>
  );
};

export default NavBar;
