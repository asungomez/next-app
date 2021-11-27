import type { NextApiRequest, NextApiResponse } from 'next';

interface NewsletterSubscriptionRequest extends NextApiRequest {
  body: {
    email?: string
  }
};

const handler = (
  request: NewsletterSubscriptionRequest,
  response: NextApiResponse
) => {
  const {
    body: { email },
    method
  } = request;
  if (!email) {
    response.status(400).end({ message: 'Email address is required' });
  }
  if (!(method === 'POST')) {
    response.status(405).end({ message: `Method ${method} not allowed` });
  }
  console.log(email);
  response.status(200).json({ message: `${email} was subscribed to the newsletter` });
}

export default handler;