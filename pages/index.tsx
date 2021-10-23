import type { NextPage } from 'next';

import { EventsList } from '../components/events/events-list';
import { getFeaturedEvents } from '../dummy-data';

const Home: NextPage<{}> = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Home</h1>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default Home;
