import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const News = () => {
  return (
    <Layout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>News</Breadcrumb.Item>
      </Breadcrumb>
      <Content className="site-layout-background" style={{ padding: 24, minHeight: 280 }}>
        <h1>News</h1>
        <p>This is where you can display news and updates related to your NGO.</p>
      </Content>
    </Layout>
  );
}

export default News;
