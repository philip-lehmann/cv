import { env } from '@cv/helpers/env';
import { RedisClient } from 'bun';

let client: RedisClient | null = null;

export const getRedisClient = () => {
  if (client) {
    return client;
  }

  const redisUrl = env.REDIS_URL;
  client = redisUrl ? new RedisClient(redisUrl) : new RedisClient();
  return client;
};
