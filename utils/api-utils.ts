import { uniqueValues } from "./utils";

export type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string,
  isFeatured: boolean;
};

export const getAllEvents = async () : Promise<Event[]> => {
  const response = await fetch(`${process.env['FIREBASE_URL']}/events.json`);
  const data = await response.json();
  const events : Event[] = [];
  for (const eventId in data) {
    events.push({
      id: eventId,
      ...data[eventId],
    });
  }
  return events;
};

export const getEventById = async (id: string) : Promise<Event | undefined> => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
};

export const getEventIds = async () : Promise<string[] | undefined> => {
  const events = await getAllEvents();
  const ids = events.map(event => event.id);
  return uniqueValues(ids);
}

export const getFeaturedEvents = async () : Promise<Event[]> => {
  const events = await getAllEvents();
  return events.filter(event => event.isFeatured);
};

export const getFilteredEvents = async (
  dateFilter : {year: number, month: number}
) : Promise<Event[]> => {
  const { year, month } = dateFilter;
  const events = await getAllEvents();
  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}