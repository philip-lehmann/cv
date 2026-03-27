import { logError } from '@cv/helpers/log';
import type { Messages } from '../shared/types';

export class MessagesNotFound extends Error {
  constructor() {
    super('Failed to load messages');
    this.name = 'MessagesNotFound';
  }
}

export const getMessages = async (locale: 'de' | 'en'): Promise<Messages> => {
  try {
    const module = await import(`./${locale}.json`);
    return module.default;
  } catch (error) {
    logError('messages_load_failed', { error, locale });
    throw new MessagesNotFound();
  }
};
