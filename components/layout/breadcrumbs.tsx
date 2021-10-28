import { Breadcrumb } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';
import { formatDateSlug } from '../../utils/date';
import classes from './breadcrumbs.module.scss';
import { BreadcrumbsItem } from './breadcrumbs-item';

export type BreadcrumbItem = {
  name: string;
  url?: string;
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
      let date: string = '';
      try {
        date = formatDateSlug(router.query.slug as string[]);
      } catch (e) {
        date = 'Error';
      }
      breadcrumbs.push({
        name: date,
      });
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
