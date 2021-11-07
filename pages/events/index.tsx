import { Typography } from 'antd';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { EventsFilter } from '../../components/events-filter/events-filter';
import { EventsList } from '../../components/events-list/events-list';
import { Event, getAllEvents } from '../../utils/api-utils';
import { getDates } from '../../utils/date';
const { Title } = Typography;

interface Props {
  events: Event[];
}

const EventsPage: NextPage<Props> = ({ events }) => {
  const router = useRouter();
  const filterHandler = (year: number, month: number) => {
    router.push(`/events/${year}/${month}`);
  };
  const dates = getDates(events);

  return (
    <div>
      <Head>
        <title>Events list</title>
      </Head>
      <Title>Browse all events</Title>
      <EventsFilter onSubmit={filterHandler} dates={dates} />
      <EventsList events={events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 900,
  };
};

export default EventsPage;
