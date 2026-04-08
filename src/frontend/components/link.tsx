import type { LinkBaseProps } from '@mui/material';
import {
  type AnchorHTMLAttributes,
  type ElementType,
  type FC,
  type MouseEvent,
  type ReactNode,
  useCallback,
} from 'react';
import { pushState } from '../hooks/useSearchParams';

export interface LinkProps extends LinkBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode;
  href: string | { pathname: string; query?: Record<string, string>; hash?: string };
  scroll?: boolean;
  component?: ElementType;
  local?: boolean;
}

export const Link: FC<LinkProps> = ({
  children,
  href,
  scroll,
  component: Component = 'a',
  local = false,
  onClick,
  ...props
}) => {
  let stringHref: string;
  if (typeof href === 'string') {
    stringHref = href;
  } else {
    const query = href.query ? `?${new URLSearchParams(href.query).toString()}` : '';
    const hash = href.hash ? `#${href.hash}` : '';
    stringHref = `${href.pathname}${query}${hash}`;
  }

  const onClickHandler = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (local) {
        e.preventDefault();
        e.stopPropagation();
        pushState(null, '', stringHref);
      }
    },
    [stringHref, local, onClick],
  );

  return (
    <Component {...props} href={stringHref} onClick={onClickHandler}>
      {children}
    </Component>
  );
};
