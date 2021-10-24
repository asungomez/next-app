import { Breadcrumb } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import classes from './breadcrumbs.module.scss';
import { BreadcrumbsItem } from './breadcrumbs-item';

export type BreadcrumbItem = {
  name: string;
  url?: string;
};

const formatDate = (slug: string[2]) => {
  const dateObject = DateTime.fromObject({ year: +slug[0], month: +slug[1] });
  return dateObject.toFormat('MMMM yyyy');
};

export const Breadcrumbs: React.FC<{}> = () => {
  const router = useRouter();
  const breadcrumbs: BreadcrumbItem[] = [
    {
      name: 'Home',
      url: '/',
    },
  ];

  if (router.asPath.includes('events')) {
    breadcrumbs.push({
      name: 'Events',
      url: '/events',
    });
    if (router.query.eventId) {
      const event = getEventById(router.query.eventId as string);
      if (event) {
        breadcrumbs.push({
          name: event.title,
        });
      } else {
        breadcrumbs.push({
          name: 'Not found',
        });
      }
    } else if (router.query.slug?.length === 2) {
      breadcrumbs.push({ name: formatDate(router.query.slug as string[2]) });
    }
  }
  return (
    <Breadcrumb className={classes['breadcrumbs']}>
      {breadcrumbs.map((breadcrumb, index) => (
        <BreadcrumbsItem breadcrumb={breadcrumb} key={index} />
      ))}
    </Breadcrumb>
  );
};
