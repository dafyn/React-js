import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import logo from '../Assets/olum-nobg.png';
import { MailOutlined,FundOutlined , PhoneOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined, PinterestOutlined, LinkedinOutlined,XOutlined, TikTokOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#f8f9fa', color: '#000' }}>
      <div style={{ padding: '20px 0' }}>
        <Row gutter={[16, 16]} justify="center" >
          {/* Quick Info Section */}
          <Col xs={24} sm={12} md={6}>
            <span>
              <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
              <p style={{ fontSize: '15px', paddingBottom: '10px'}}>OLUM FOUNDATION </p>
            </span>

            <h4>Socials</h4>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><XOutlined style= {{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><YoutubeOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><TikTokOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><PinterestOutlined style={{ fontSize: '24px', marginRight: '10px' }} /></a>
            
          </Col>

          {/* contact us Section */}
          <Col xs={24} sm={12} md={6}>
            <h4>Contact Us</h4>
            <p>NewsLetters Signup</p>
            <p>Address: Nakawa, Kampala-Uganda</p>
            <p> <MailOutlined /> <a href="mailto:info@olumfoundation.com">info@olumfoundation.com</a></p>
            <p><PhoneOutlined /> <a href="tel:+256760895069">+256760895069</a></p>
          </Col>


          {/* useful Links Section */}
          <Col xs={24} sm={12} md={6}>
            <h4>Useful links</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>Donation form </p>
            <p>Projects</p>
            <p>News</p>
            <p>Careers</p>
            
          </Col>
          {/* Donate Button Section */}
          <Col xs={24} sm={12} md={6}>
            <h4>Donate</h4>
            <Button 
              className='custom-button' 
              >
                  <span><FundOutlined /> | Donate</span>
            </Button>
          </Col>
        </Row>
      </div>
      <div style={{ backgroundColor: '#001529', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <span>Olum Foundation ©{new Date().getFullYear()} Created by Daphine Aromorach</span>
        <span style={{ marginLeft: '20px' }}>
          <a href="/privacy-policy" style={{ color: '#fff', margin: '0 10px' }}>Privacy Policy</a>
          <a href="/terms-of-service" style={{ color: '#fff', margin: '0 10px' }}>Terms of Service</a>
          <a href="/cookie-policy" style={{ color: '#fff', margin: '0 10px' }}>Cookie Policy</a>
        </span>
      </div>
    </Footer>
  );
}

export default FooterComponent;
