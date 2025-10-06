import Link from '@mui/material/Link';
import type { FC } from 'react';
import { useTranslations } from '../intl';
import { SidebarItem } from './helper';

export const Contact: FC = () => {
  const t = useTranslations('Contact');
  return (
    <SidebarItem title={t('name')}>
      16.09.1986
      <br />
      {t('swiss')}
      <br />
      <br />
      <Link href="tel:0041797562627">+41 79 756 26 27</Link>
      <br />
      <Link href="mailto:hireme@philiplehmann.ch">hireme@philiplehmann.ch</Link>
      <br />
      <Link href="https://philiplehmann.ch" target="_blank" rel="noopener noreferrer">
        philiplehmann.ch
      </Link>
      <br />
      <br />
      8820 Wädenswil
    </SidebarItem>
  );
};
