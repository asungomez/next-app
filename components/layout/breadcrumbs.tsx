import { Breadcrumb } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getEventById } from '../../utils/api-utils';
import { formatDateSlug } from '../../utils/date';
import classes from './breadcrumbs.module.scss';
import { BreadcrumbsItem } from './breadcrumbs-item';

export type BreadcrumbItem = {
  name: string;
  url?: string;
};

export const Breadcrumbs: React.FC<{}> = () => {
  const [lastItem, setLastItem] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if (router.query.eventId) {
      getEventById(router.query.eventId as string)
        .then(event => {
          setLastItem(event ? event.title : 'Not found');
        })
        .catch(() => setLastItem('Not found'));
    } else if (router.query.slug?.length === 2) {
      try {
        const date = formatDateSlug(router.query.slug as string[]);
        setLastItem(date);
      } catch (e) {
        setLastItem('Error');
      }
    } else {
      setLastItem(undefined);
    }
  }, [router.query]);

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
    if (lastItem) {
      breadcrumbs.push({
        name: lastItem,
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
