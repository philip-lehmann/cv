import type { Messages } from 'global';

export class MessagesNotFound extends Error {
  constructor() {
    super('Failed to load messages');
    this.name = 'MessagesNotFound';
  }
}

export const getMessages = async (locale: 'de' | 'en'): Promise<Messages> => {
  try {
    return await import(`./${locale}.json`);
  } catch (error) {
    console.error(error);
    throw new MessagesNotFound();
  }
};
