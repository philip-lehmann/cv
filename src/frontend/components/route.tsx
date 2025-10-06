import { createContext, type FC, type PropsWithChildren, useContext } from 'react';

export type Messages = { [key: string]: string | Messages };

const RouteContext = createContext<{ pathname: string; search: string }>({ pathname: '', search: '' });

export const useRoute = () => {
  return useContext(RouteContext);
};

export const RouteProvider: FC<PropsWithChildren<{ pathname: string; search: string }>> = ({
  children,
  pathname,
  search,
}) => {
  return <RouteContext.Provider value={{ pathname, search }}>{children}</RouteContext.Provider>;
};
