import { createContext, type FC, type PropsWithChildren, useContext, useMemo } from 'react';

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
  const value = useMemo(() => ({ pathname, search }), [pathname, search]);
  return <RouteContext.Provider value={value}>{children}</RouteContext.Provider>;
};
