import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const ProjectDetail = () => {
  return (
    <Layout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Project Detail</Breadcrumb.Item>
      </Breadcrumb>
      <Content className="site-layout-background" style={{ padding: 24, minHeight: 280 }}>
        <h1>Project Detail</h1>
        <p>This is where you can display detailed information about a specific project.</p>
      </Content>
    </Layout>
  );
}

export default ProjectDetail;
