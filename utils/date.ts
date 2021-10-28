import { DateTime } from 'luxon';

export const formatDateSlug = (slug: string[]) => {
  if (slug?.length === 2) {
    for (const slugItem of slug) {
      if (isNaN(+slugItem)) {
        throw new Error('This URL is invalid');
      }
    }
    const dateObject = DateTime.fromObject({ year: +slug[0], month: +slug[1] });
    const date = dateObject.toFormat('MMMM yyyy');
    if (!date || date.includes('Invalid')) {
      throw new Error('This URL is invalid');
    }
    return date;
  }
  throw new Error('This URL is invalid');
};