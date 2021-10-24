import { Typography } from 'antd';
import type { NextPage } from 'next';

import { EventsList } from '../../components/events-list/events-list';
import { getAllEvents } from '../../dummy-data';
const { Title } = Typography;

const EventsPage: NextPage<{}> = () => {
  const events = getAllEvents();
  return (
    <div>
      <Title>Browse all events</Title>
      <EventsList events={events} />
    </div>
  );
};

export default EventsPage;
