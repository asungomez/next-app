import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

const EventPage: NextPage<{}> = () => {
  const router = useRouter();
  const { eventId } = router.query;
  return <h1>Event page {eventId}</h1>;
};

export default EventPage;
