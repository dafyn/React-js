import React from 'react';
import { Card } from 'antd';

const ProjectCard = ({ project }) => {
  return (
    <Card title={project.title} style={{ width: 300 }}>
      <p>{project.description}</p>
      {/* Add more project details here */}
    </Card>
  );
}

export default ProjectCard;
