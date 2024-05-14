import React from 'react';
import { Form, Input, Button } from 'antd';

const ContactForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      name="contact_form"
      onFinish={onFinish}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please enter your message!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send Message
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ContactForm;
