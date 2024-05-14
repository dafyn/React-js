import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <Content className="site-layout-background" style={{ padding: 24, minHeight: 280 }}>
        Home Page Content
      </Content>
    </Layout>
  );
}

export default Home;
