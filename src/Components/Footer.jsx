import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { MailOutlined, PhoneOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined, PinterestOutlined, LinkedinOutlined,XOutlined, TikTokOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff' }}>
      <div style={{ padding: '20px 0' }}>
        <Row gutter={[16, 16]} justify="center" >
          {/* Quick Info Section */}
          <Col xs={24} sm={12} md={6}>
            <h3>Quick Info</h3>
            <p>Careers</p>
            <p>Home</p>
            <p>Donation Form</p>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Projects</p>
          </Col>
          {/* Socials Section */}
          <Col xs={24} sm={12} md={6}>
            <h3>Socials</h3>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><XOutlined style= {{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><YoutubeOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><TikTokOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><PinterestOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
          </Col>
          {/* Contact Links Section */}
          <Col xs={24} sm={12} md={6}>
            <h3>Contact</h3>
            <p>Contact Us</p>
            <p>NewsLetters Signup</p>
            <p>Address: Nakawa, Kampala-Uganda</p>
            <p> <MailOutlined /> <a href="mailto:info@olumfoundation.com">info@olumfoundation.com</a></p>
            <p><PhoneOutlined /> <a href="tel:+256760895069">+256760895069</a></p>
          </Col>
          {/* Donate Button Section */}
          <Col xs={24} sm={12} md={6}>
            <h3>Donate</h3>
            <Button type="primary" size="large">Donate Now</Button>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: '#001529', padding: '10px 0' }}>
        Olum Foundation ©{new Date().getFullYear()} Created by Aromorach Daphine
      </div>
    </Footer>
  );
}

export default FooterComponent;
