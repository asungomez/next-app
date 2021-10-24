import { Card, Col, Image, List, Row, Typography } from 'antd';

import { Event } from '../../dummy-data';
const { Title, Text } = Typography;
import {
  CalendarOutlined,
  EnvironmentOutlined,
  LikeTwoTone,
} from '@ant-design/icons';

type EventDetailProps = {
  event: Event;
};

export const EventDetails: React.FC<EventDetailProps> = ({ event }) => (
  <Row>
    <Col offset={0} span={24} md={{ offset: 4, span: 16 }}>
      <Row align="middle" gutter={40} wrap>
        <Col span={24} md={{ span: 8 }}>
          <Image src={`/${event.image}`} placeholder alt={event.title} />
        </Col>
        <Col span={24} md={{span: 16}}>
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
                  title={event.date}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta title={event.description} />
              </List.Item>
            </List>
          </Card>
        </Col>
      </Row>
    </Col>
  </Row>
);
