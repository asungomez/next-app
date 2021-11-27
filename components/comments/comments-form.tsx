import { Button, Form, Input, Row } from 'antd';
import React from 'react';

import { Comment } from '../../utils/api-utils';
import classes from './comments-form.module.scss';

interface CommentsFormProps {
  onSubmit: (comment: Comment) => void;
}

export const CommentsForm: React.FC<CommentsFormProps> = ({ onSubmit }) => {
  const submitHander = (comment: Comment) => onSubmit(comment);
  return (
    <Form
      validateTrigger="onSubmit"
      onFinish={submitHander}
      layout="vertical"
      className={classes['commentsForm']}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Introduce your name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="text"
        label="Comment"
        rules={[{ required: true, message: 'Introduce a comment' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Leave a comment
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};
