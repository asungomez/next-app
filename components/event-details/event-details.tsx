import { Card, Col, List, Row, Typography } from 'antd';
import Image from 'next/image';

const { Title } = Typography;
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';

import { Event } from '../../utils/api-utils';
import { Date } from '../date/date';

type EventDetailProps = {
  event: Event;
};

export const EventDetails: React.FC<EventDetailProps> = ({ event }) => (
  <Row align="middle" gutter={40} wrap>
    <Col span={24} md={{ span: 8 }}>
      <Image
        src={`/${event.image}`}
        alt={event.title}
        width={230}
        height={130}
      />
    </Col>
    <Col span={24} md={{ span: 16 }}>
      <Title>{event.title}</Title>
      <Card>
        <List>
          <List.Item>
            <List.Item.Meta
              avatar={<EnvironmentOutlined />}
              title={event.location}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta
              avatar={<CalendarOutlined />}
              title={<Date date={event.date} />}
            />
          </List.Item>
          <List.Item>
            <List.Item.Meta title={event.description} />
          </List.Item>
        </List>
      </Card>
    </Col>
  </Row>
);
