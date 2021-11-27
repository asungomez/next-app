import { List } from 'antd';
import React from 'react';

import { Comment } from '../../utils/api-utils';
import { CommentItem } from './comment-item';

interface CommentsListProps {
  comments: Comment[];
}

export const CommentsList: React.FC<CommentsListProps> = ({ comments }) => (
  <List
    itemLayout="horizontal"
    dataSource={comments}
    renderItem={comment => <CommentItem comment={comment} />}
  />
);
