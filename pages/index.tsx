import { Typography } from 'antd';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { EventsList } from '../components/events-list/events-list';
import { Event, getFeaturedEvents } from '../utils/api-utils';
const { Title } = Typography;

interface Props {
  featuredEvents: Event[];
}

const Home: NextPage<Props> = ({ featuredEvents }) => {
  return (
    <>
      <Head>
        <title>Featured events</title>
      </Head>
      <Title>Home</Title>
      <EventsList events={featuredEvents} />
    </>
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
