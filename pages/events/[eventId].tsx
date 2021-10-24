import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

import { EventDetails } from '../../components/event-details/event-details';
import { EventNotFound } from '../../components/event-details/event-not-found';
import { getEventById } from '../../dummy-data';

const EventPage: NextPage<{}> = () => {
  const router = useRouter();
  const eventId: string = router.query.eventId as string;
  const event = getEventById(eventId);
  return event ? <EventDetails event={event} /> : <EventNotFound />;
};

export default EventPage;
