'use client';

import { type FC, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import type { LangType } from '@cv/helpers/date';
import { useParams } from 'next/navigation';

interface DisableScrollProps {
  element: HTMLElement;
  disabled: boolean;
}

const videoTitle = Object.freeze({
  post: {
    de: 'Die Schweizerische Post: Multitouch Messelösung (HTML5)',
    en: 'The Swiss Post: Exhibition Multitouch Application (HTML5)',
  },
  avaloq: {
    de: 'Avaloq Financial Planning Prototyp',
    en: 'Avaloq Financial Planning Prototyp',
  },
  trilux: {
    de: 'Trilux Verkausfsanwendung an der "Light+Building 2012"',
    en: 'Trilux sales application at the "Light+Building 2012"',
  },
  kinect: {
    de: 'Kinect Demo HTML5 & Javascript',
    en: 'Kinect Demo HTML5 & Javascript',
  },
  local: {
    de: 'local.ch: Sales Butler',
    en: 'local.ch: Sales Butler',
  },
});
export type VideoType = keyof typeof videoTitle;
export const VideoKeys = Object.freeze(Object.getOwnPropertyNames(videoTitle) as VideoType[]);
export const isVideoKey = (source: string | string[] | undefined): source is VideoType => {
  return typeof source === 'string' && (VideoKeys as string[]).includes(source);
};

interface VideoModalProps {}

const useDisableScroll = ({ element, disabled }: DisableScrollProps): void => {
  useEffect(() => {
    element.style.overflowY = disabled ? 'hidden' : 'scroll';

    return () => {
      element.style.overflowY = 'scroll';
    };
  }, [disabled, element]);
};

const VideoModal: FC<VideoModalProps> = () => {
  const query = useParams();
  const video = isVideoKey(query?.video) ? query.video : null;
  // if (video) {
  //   title = `${title} - video ${video}`;
  // }
  const router = useRouter();
  const { locale } = router;

  const videoRef = useRef<HTMLVideoElement>(null);

  const [open, setOpen] = useState(false);
  const closeHandler = useCallback(() => {
    setOpen(false);
  }, []);
  const closedHandler = useCallback(() => {
    router.push({ query: {} }, undefined, { scroll: false });
  }, [router]);
  const openedHandler = useCallback(() => {
    try {
      // only allowed by user interaction
      videoRef.current?.play();
    } catch (e) {
      // eslint-disable-next-line no-console
      // console.error(e)
    }
  }, []);
  useEffect(() => {
    setOpen(!!video);
  }, [video]);

  const title = video && videoTitle[video][locale as LangType];

  const isMSEdge = window.navigator.userAgent.toLowerCase().includes('edg') && window.navigator.platform === 'Win32';

  useDisableScroll({ element: document.body, disabled: open });

  return createPortal(
    <Dialog
      open={open}
      onClose={closeHandler}
      onExited={closedHandler}
      onEntered={openedHandler}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <DialogTitle>
        {title}
        <IconButton
          aria-label="close"
          onClick={closeHandler}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
        <video controls width="100%" ref={videoRef} poster={`/api/video/${video}.webp`}>
          {!isMSEdge && <source src={`/api/video/${video}.av1.mp4`} type="video/mp4; codecs=av01.0.05M.08" />}
          <source src={`/api/video/${video}.m4v`} type="video/mp4; codecs=hvc1" />
          <source src={`/api/video/${video}.mp4`} type="video/mp4; codecs=avc1" />
          <source src={`/api/video/${video}.webm`} type="video/webm" />
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </DialogContent>
    </Dialog>,
    document.body,
  ) as ReactNode;
};

export default VideoModal;
