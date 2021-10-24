import { DateTime } from 'luxon';

type DateProps = {
  date: string;
  format?: string;
};

export const Date: React.FC<DateProps> = ({ date, format = 'yyyy-MM-dd' }) => {
  const dateObject = DateTime.fromFormat(date, format);
  return <>{dateObject.toFormat('MMMM d, yyyy')}</>;
};
