import type { FC, ComponentPropsWithRef } from 'react';
import { Link, Card, CardContent, Typography, Box } from '@mui/material';

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
        <source srcSet={`/images/${image}@1x.avif, /images/${image}@1x.avif 2x`} type="image/avif" />
        <source srcSet={`/images/${image}@1x.webp, /images/${image}@1x.webp 2x`} type="image/webp" />
        <source srcSet={`/images/${image}@1x.png, /images/${image}@2x.png 2x`} type="image/png" />
        <img src={`/images/${image}@1x.png`} alt={image} />
      </picture>
      {name}
    </Link>
  );
};

export const FollowMe: FC = () => {
  return (
    <Card sx={{ backgroundColor: 'transparent' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Follow Me
        </Typography>
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
      </CardContent>
    </Card>
  );
};
