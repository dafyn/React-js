import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const About = () => {
  return (
    <Layout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>About Us</Breadcrumb.Item>
      </Breadcrumb>
      <Content className="site-layout-background" style={{ padding: 24, minHeight: 280 }}>
        <h1>About Us</h1>
        <p>This is where you can tell the story of your NGO, its mission, vision, and values.</p>
      </Content>
    </Layout>
  );
}

export default About;
