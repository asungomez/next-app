import { List } from 'antd';

import { Event } from '../../utils/api-utils';
import { EventsListItem } from './events-list-item';

type EventsListProps = {
  events: Event[];
};

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={events}
      renderItem={event => <EventsListItem event={event} />}
    />
  );
};
