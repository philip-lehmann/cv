'use client';

import { useEffect, type FC } from 'react';
import hireMe from '@cv/helpers/hire_me';

export const HireMe: FC = () => {
  useEffect(hireMe, []);
  return null;
};
