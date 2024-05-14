import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const Projects = () => {
  return (
    <Layout>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Projects</Breadcrumb.Item>
      </Breadcrumb>
      <Content className="site-layout-background" style={{ padding: 24, minHeight: 280 }}>
        <h1>Projects</h1>
        <p>This is where you can display a list of ongoing projects.</p>
      </Content>
    </Layout>
  );
}

export default Projects;
