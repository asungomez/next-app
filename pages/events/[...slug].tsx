import { Spin, Typography } from 'antd';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Event, getFilteredEvents } from '../../dummy-data';
import { formatDateSlug } from '../../utils/date';
const { Title } = Typography;
import { useEffect, useState } from 'react';

import { ErrorMessage } from '../../components/error/error-message';
import { EventsList } from '../../components/events-list/events-list';

const EventsBySlug: NextPage<{}> = () => {
  const router = useRouter();
  const slug = router.query.slug as string[];

  const [loading, setLoading] = useState(!slug);

  useEffect(() => {
    if (loading && slug) {
      setLoading(false);
    }
  }, [loading, slug]);

  let error: string | null = null;
  let date: string = '...';
  let events: Event[] = [];

  try {
    date = formatDateSlug(slug);
    events =
      slug?.length === 2
        ? getFilteredEvents({ year: +slug[0], month: +slug[1] })
        : [];
    if (events.length === 0) {
      error = 'There are no events for this period';
    }
  } catch (e: any) {
    error = e.message;
  }

  return loading ? (
    <Spin size="large" />
  ) : error ? (
    <ErrorMessage message="There was an error" description={error} />
  ) : (
    <div>
      <Title>Events from {date}</Title>
      <EventsList events={events} />
    </div>
  );
};

export default EventsBySlug;
