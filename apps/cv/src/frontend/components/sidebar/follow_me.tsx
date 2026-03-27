import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import type { ComponentPropsWithRef, FC } from 'react';
import { SidebarItem } from './helper';

export interface LinkProps extends Omit<ComponentPropsWithRef<'a'>, 'children' | 'target' | 'rel'> {
  image: string;
  name: string;
}

const LinkComponent: FC<LinkProps> = ({ image, name, ...anchorProps }) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
        '& picture': {
          height: '20px',
          width: '20px',
          '& img': {
            width: '100%',
            height: '100%',
          },
        },
      }}
      {...anchorProps}
    >
      <picture>
        <source srcSet={`/static/images/${image}@1x.avif, /static/images/${image}@2x.avif 2x`} type="image/avif" />
        <source srcSet={`/static/images/${image}@1x.webp, /static/images/${image}@2x.webp 2x`} type="image/webp" />
        <source srcSet={`/static/images/${image}@1x.png, /static/images/${image}@2x.png 2x`} type="image/png" />
        <img src={`/static/images/${image}@1x.png`} alt={image} />
      </picture>
      {name}
    </Link>
  );
};

export const FollowMe: FC = () => {
  return (
    <SidebarItem title="Follow Me">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <LinkComponent image="github" name="Github" href="https://github.com/philiplehmann" />
        <LinkComponent image="linkedin" name="LinkedIn" href="https://www.linkedin.com/in/philip-lehmann-6362a256/" />
        <LinkComponent image="xing" name="Xing" href="https://www.xing.com/profile/Philip_Lehmann5/cv" />
      </Box>
    </SidebarItem>
  );
};
