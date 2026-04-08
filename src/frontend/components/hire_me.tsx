'use client';

import { type FC, useEffect } from 'react';
import { hireMe } from '../../helpers/hire_me';

export const HireMe: FC = () => {
  console.log('hireme');
  useEffect(hireMe, []);
  return null;
};
