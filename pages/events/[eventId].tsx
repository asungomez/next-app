import { Col, Row } from 'antd';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import { Comments } from '../../components/comments/comments';
import { EventDetails } from '../../components/event-details/event-details';
import { EventNotFound } from '../../components/event-details/event-not-found';
import { Event, getEventById, getEventIds } from '../../utils/api-utils';

interface Props {
  event: Event | undefined;
}

interface Params extends ParsedUrlQuery {
  eventId: string;
}

const EventPage: NextPage<Props> = ({ event }) => {
  return event ? (
    <>
      <Head>
        <title>{event.title}</title>
      </Head>
      <Row>
        <Col offset={0} span={24} md={{ offset: 4, span: 16 }}>
          <EventDetails event={event} />
          <Row align="middle" gutter={40} wrap>
            <Col span={24} md={{ span: 16, offset: 8 }}>
              <Comments />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  ) : (
    <>
      <Head>
        <title>Event not found</title>
      </Head>
      <EventNotFound />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const eventId = context.params?.eventId;
  let event: Event | undefined;
  if (eventId) {
    event = await getEventById(eventId);
  }

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async context => {
  const ids = await getEventIds();
  return {
    paths:
      ids?.map(id => ({
        params: {
          eventId: id,
        },
      })) ?? [],
    fallback: 'blocking',
  };
};

export default EventPage;
