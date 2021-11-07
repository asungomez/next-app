import { Typography } from 'antd';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Head from 'next/head';

import { formatDateSlug } from '../../utils/date';
const { Title } = Typography;

import { ErrorMessage } from '../../components/error/error-message';
import { EventsList } from '../../components/events-list/events-list';
import { Event, getFilteredEvents } from '../../utils/api-utils';

interface Props {
  events: Event[];
}

interface Params extends ParsedUrlQuery {
  slug: string[];
}

const EventsBySlug: NextPage<Props> = ({ events }) => {
  const router = useRouter();
  const slug = router.query.slug as string[];
  let date: string = '...';
  if (slug) {
    date = formatDateSlug(slug);
  }

  let error: string | null = null;
  if (events.length === 0) {
    error = 'There are no events for this period';
  }

  return error ? (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <ErrorMessage message="There was an error" description={error} />
    </>
  ) : (
    <>
      <Head>
        <title>Events from {date}</title>
      </Head>
      <Title>Events from {date}</Title>
      <EventsList events={events} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props, Params> =
  async context => {
    const slug = context.params?.slug;
    let date: string = '...';
    let events: Event[] = [];
    if (slug) {
      date = formatDateSlug(slug);
      events =
        slug?.length === 2
          ? await getFilteredEvents({ year: +slug[0], month: +slug[1] })
          : [];
    }
    return {
      props: {
        events,
      },
    };
  };

export default EventsBySlug;
