import type { Messages } from 'global';

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
    console.error(error);
    throw new MessagesNotFound();
  }
};
