import { Breadcrumb } from 'antd';
import Link from 'next/link';

import { BreadcrumbItem } from './breadcrumbs';

type BreadcrumbsItemProps = {
  breadcrumb: BreadcrumbItem;
};

export const BreadcrumbsItem: React.FC<BreadcrumbsItemProps> = ({
  breadcrumb,
}) => {
  const content = breadcrumb.url ? (
    <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
  ) : (
    breadcrumb.name
  );
  return <Breadcrumb.Item>{content}</Breadcrumb.Item>;
};
