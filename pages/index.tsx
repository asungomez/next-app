import { Typography } from 'antd';
import type { GetStaticProps, NextPage } from 'next';

import { EventsList } from '../components/events-list/events-list';
import { Event, getFeaturedEvents } from '../utils/api-utils';
const { Title } = Typography;

interface Props {
  featuredEvents: Event[];
}

const Home: NextPage<Props> = ({ featuredEvents }) => {
  return (
    <div>
      <Title>Home</Title>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};

export default Home;
