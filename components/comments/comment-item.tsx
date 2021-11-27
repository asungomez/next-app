import { List } from 'antd';
import React from 'react';

import { Comment } from '../../utils/api-utils';

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem: React.FC<CommentItemProps> = ({ comment }) => (
  <List.Item>
    <List.Item.Meta title={comment.text} description={comment.name} />
  </List.Item>
);
