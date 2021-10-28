import { Typography } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { EventsFilter } from '../../components/events-filter/events-filter';
import { EventsList } from '../../components/events-list/events-list';
import { getAllEvents } from '../../dummy-data';
const { Title } = Typography;

const EventsPage: NextPage<{}> = () => {
  const events = getAllEvents();
  const router = useRouter();
  const filterHandler = (year: number, month: number) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <Title>Browse all events</Title>
      <EventsFilter onSubmit={filterHandler} />
      <EventsList events={events} />
    </div>
  );
};

export default EventsPage;
