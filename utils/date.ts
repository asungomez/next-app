import { DateTime } from 'luxon';
import { Event } from './api-utils';
import { uniqueValues } from './utils';

export type Dates = {
  [year: number]: number[]
};

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

export const getDates = (events: Event[]) : Dates => {
  const enrichedEvents = events.map(event => {
    const [year, month, day] = event.date.split('-');
    return {
      ...event,
      year: +year,
      month: +month,
      day: +day,
    }
  });
  const years = uniqueValues(enrichedEvents.map(event => event.year));
  const dates : Dates = {};
  for (const year of years) {
    dates[year] = uniqueValues(
      enrichedEvents
        .filter(event => event.year === year)
        .map(event => event.month)
    );
  }
  return dates;
}