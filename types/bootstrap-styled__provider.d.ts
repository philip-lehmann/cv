declare module '@bootstrap-styled/provider' {
  import { type PropsWithChildren, ReactComponentElement } from 'react';

  const provider: ComponentType<PropsWithChildren<{ theme: Record<string, string> }>>;
  export default provider;
}
