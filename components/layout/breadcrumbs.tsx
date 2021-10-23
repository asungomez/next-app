import { Breadcrumb } from 'antd';

import classes from './breadcrumbs.module.scss';

export const Breadcrumbs: React.FC<{}> = () => {
  return (
    <Breadcrumb className={classes['breadcrumbs']}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
  );
};
