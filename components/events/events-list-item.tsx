import { CalendarOutlined } from '@ant-design/icons';
import { List } from 'antd';
import Link from 'next/link';

import { Event } from '../../dummy-data';

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
          <CalendarOutlined />{' '}
          {new Date(event.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}{' '}
          @ {event.location}
        </>
      }
    />
  </List.Item>
);
