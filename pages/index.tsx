import { Typography } from 'antd';
import type { NextPage } from 'next';

import { EventsList } from '../components/events/events-list';
import { getFeaturedEvents } from '../dummy-data';
const { Title } = Typography;

const Home: NextPage<{}> = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Title>Home</Title>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default Home;
