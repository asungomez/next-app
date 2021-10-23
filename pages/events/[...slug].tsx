import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';

const EventsBySlug: NextPage<{}> = () => {
  const router = useRouter();
  const { slug } = router.query;

  return slug?.length === 1 ? (
    <h1>Event page {slug[0]}</h1>
  ) : (
    <h1>Events filtered page</h1>
  );
};

export default EventsBySlug;
