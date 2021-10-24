import { CalendarOutlined } from '@ant-design/icons';
import { List } from 'antd';
import Link from 'next/link';

import { Event } from '../../dummy-data';
import { Date } from '../date/date';

type EventsListItemProps = {
  event: Event;
};

export const EventsListItem: React.FC<EventsListItemProps> = ({ event }) => (
  <List.Item>
    <List.Item.Meta
      title={
        <Link
          href={{
            pathname: '/events/[eventId]',
            query: {
              eventId: event.id,
            },
          }}
        >
          {event.title}
        </Link>
      }
      description={
        <>
          <CalendarOutlined /> <Date date={event.date} /> @ {event.location}
        </>
      }
    />
  </List.Item>
);
