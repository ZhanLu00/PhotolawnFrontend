import { Layout } from 'antd';
import App, { Container } from 'next/app';
import React from 'react';
import '../assets/global.less';
import NavBar from '../components/NavBar';

const { Content } = Layout;

export default class Photolawn extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <NavBar title="Photolawn" />
          <Content style={{ padding: '50px 100px 0 100px' }}>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Container>
    );
  }
}
