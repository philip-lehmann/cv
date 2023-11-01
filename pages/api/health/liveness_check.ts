import type { NextApiRequest, NextApiResponse } from 'next';

export default (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).send('liveness_check');
};
