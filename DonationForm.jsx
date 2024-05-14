import React from 'react';
import { Form, Input, Button } from 'antd';

const DonationForm = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <Form
      name="donation_form"
      onFinish={onFinish}
    >
      <Form.Item
        label="Amount"
        name="amount"
        rules={[{ required: true, message: 'Please enter the donation amount!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Donate
        </Button>
      </Form.Item>
    </Form>
  );
}

export default DonationForm;
