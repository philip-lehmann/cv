import { createContext, type FC, type PropsWithChildren, useContext } from 'react';

export type Messages = { [key: string]: string | Messages };

const IntlContext = createContext<{ locale: string; messages: Messages }>({ locale: 'en', messages: {} });

export const getTranslation = (messages: Messages, key: string): string | null => {
  const value = key.split('.').reduce((obj: Messages | string, part, index, array) => {
    if (typeof obj === 'string') {
      console.error(`Invalid message key: ${key} found ${array.slice(0, index).join('.')}`);
      return obj;
    }
    return obj?.[part];
  }, messages);
  if (typeof value === 'string') {
    return value;
  }
  return null;
};

export const useTranslations = (namespace?: string) => {
  const { messages } = useContext(IntlContext);
  return (key: string): string | null => {
    const namespacedKey = namespace ? `${namespace}.${key}` : key;
    return getTranslation(messages, namespacedKey);
  };
};

export const useLocale = () => {
  const { locale } = useContext(IntlContext);
  return locale;
};

export const IntlProvider: FC<PropsWithChildren<{ locale: string; messages: Messages }>> = ({
  children,
  locale,
  messages,
}) => {
  return <IntlContext.Provider value={{ locale, messages }}>{children}</IntlContext.Provider>;
};
