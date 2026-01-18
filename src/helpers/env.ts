const fetchEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined.`);
  }
  return value;
};

export const env = {
  get PORT() {
    const portValue = process.env.PORT || '3000';
    const port = Number(portValue);

    if (Number.isNaN(port)) {
      throw new Error(`Invalid PORT value: "${portValue}" is not a valid number.`);
    }

    if (port < 1 || port > 65535) {
      throw new Error(`Invalid PORT value: ${port} must be between 1 and 65535.`);
    }

    return port;
  },
  get NODE_ENV() {
    return process.env.NODE_ENV ?? 'development';
  },
  get SITE_URL() {
    return this.NODE_ENV === 'production'
      ? process.env.SITE_URL || 'http://localhost:3000'
      : 'http://host.docker.internal:3000';
  },
  get PUPPETEER_API_URL() {
    return process.env.PUPPETEER_API_URL || 'http://localhost:3001';
  },
  get GOOGLE_ANALYTICS_KEY() {
    return process.env.GOOGLE_ANALYTICS_KEY;
  },
  get ROLLBAR_CLIENT_TOKEN() {
    return process.env.ROLLBAR_CLIENT_TOKEN;
  },
  get DEFAULT_LOCALE() {
    return process.env.DEFAULT_LOCALE ?? 'en';
  },

  get MINIO_BUCKET_NAME() {
    return fetchEnv('MINIO_BUCKET_NAME');
  },
  get MINIO_ACCESS_KEY() {
    return fetchEnv('MINIO_ACCESS_KEY');
  },
  get MINIO_SECRET_KEY() {
    return fetchEnv('MINIO_SECRET_KEY');
  },
  get MINIO_ENDPOINT() {
    return fetchEnv('MINIO_ENDPOINT');
  },
  get MINIO_REGION() {
    return fetchEnv('MINIO_REGION');
  },
};
