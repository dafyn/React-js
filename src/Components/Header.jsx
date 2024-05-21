import React from 'react';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { GlobalOutlined } from '@ant-design/icons';

const HeaderComponent = () => {
    const headerStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'white',
      zIndex: 1000 // Ensure the header appears above other content
    };
  
    return (
      <div style={headerStyle}>
        <Container>
          <div className="d-flex justify-content-between align-items-center py-2">
            <div>Be the change you want in the world</div>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <GlobalOutlined />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Swahili</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </div>
    );
  }

export default HeaderComponent;
