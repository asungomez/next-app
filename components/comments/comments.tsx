import { Col, Row } from 'antd';
import React from 'react';

import classes from './comments.module.scss';
import { CommentsForm } from './comments-form';
import { CommentsList } from './comments-list';

export const Comments: React.FC<{}> = () => {
  return (
    <>
      <Row className={classes['comments']}>
        <Col span={24}>
          <Row>
            <CommentsForm onSubmit={comment => console.log(comment)} />
          </Row>
          <Row>
            <CommentsList
              comments={[
                { name: 'Asun', text: 'Holi' },
                { name: 'Pepi', text: 'Adios' },
              ]}
            />
          </Row>
        </Col>
      </Row>
    </>
  );
};
