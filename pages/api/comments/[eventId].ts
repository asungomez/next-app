import type { NextApiRequest, NextApiResponse } from 'next';
import { getEventById } from '../../../utils/api-utils';

interface CommentRequest extends NextApiRequest {
  body: {
    name?: string,
    text?: string,
  },
  query: {
    eventId: string;
  }
};

const createComment = async (
  request: CommentRequest,
  response: NextApiResponse
) => {
  const {
    body: {
      name,
      text
    },
    query: {
      eventId
    }
  } = request;

  if (!name || !text) {
    response.status(400).end({ message: 'Name and text are required fields' });
  }
  const event = await getEventById(eventId);
  if (!event) {
    response.status(404).end();
  }
  console.log('Created comment', name, text, eventId);
  response.status(200).json({ name, text, eventId });
};

const listAllComments = async (
  request: CommentRequest,
  response: NextApiResponse
) => {
  const {
    query: {
      eventId
    }
  } = request;
  const event = await getEventById(eventId);
  if (!event) {
    response.status(404).end();
  }
  console.log('List all comments');
  response.status(200).json({ comments: [] });
};

const handler = async (
  request: CommentRequest,
  response: NextApiResponse
) => {
  switch (request.method) {
    case "GET":
      await listAllComments(request, response);
      break;
    case "POST":
      await createComment(request, response);
      break;
    default:
      response.status(405).end({ message: `Method ${request.method} not allowed` });
  }
}

export default handler;