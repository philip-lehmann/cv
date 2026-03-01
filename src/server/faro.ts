import { randomUUID } from 'node:crypto';
import { env } from '@cv/helpers/env';
import { getRedisClient } from './redis';

const FARO_TEMP_KEY_PREFIX = 'faro:api-key:';
const FARO_TEMP_KEY_TTL_SECONDS = 60 * 60;

const buildRedisKey = (key: string) => `${FARO_TEMP_KEY_PREFIX}${key}`;

export const createFaroTempKey = async () => {
  if (!env.FARO_URL) {
    return undefined;
  }

  if (!env.REDIS_URL) {
    return undefined;
  }

  const redis = getRedisClient();
  if (!redis) {
    return undefined;
  }

  const key = randomUUID();
  const redisKey = buildRedisKey(key);
  try {
    await redis.set(redisKey, '1');
    await redis.expire(redisKey, FARO_TEMP_KEY_TTL_SECONDS);
    return key;
  } catch (error) {
    console.warn('Failed to store Faro temp key in Redis.', error);
    return undefined;
  }
};

export const validateFaroTempKey = async (key?: string | null) => {
  if (!key) {
    return false;
  }

  if (!env.REDIS_URL) {
    return false;
  }

  const redis = getRedisClient();
  if (!redis) {
    return false;
  }

  try {
    const value = await redis.get(buildRedisKey(key));
    return value === '1';
  } catch (error) {
    console.warn('Failed to read Faro temp key from Redis.', error);
    return false;
  }
};
