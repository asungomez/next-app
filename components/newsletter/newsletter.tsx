import { Button, Form, Input, Typography } from 'antd';
import React from 'react';

interface NewsletterFormInput {
  email: string;
}

interface NewsletterProps {
  onSubmit: (formData: NewsletterFormInput) => void;
}

export const Newsletter: React.FC<NewsletterProps> = ({ onSubmit }) => {
  const submitHander = (formData: NewsletterFormInput) => onSubmit(formData);
  return (
    <>
      <Typography.Title level={2}>Sign up to the newsletter</Typography.Title>
      <Form
        validateTrigger="onSubmit"
        onFinish={submitHander}
        layout="inline"
      >
        <Form.Item
          name="email"
          label="e-mail"
          rules={[{ required: true, message: 'Introduce your email' }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Subscribe
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
