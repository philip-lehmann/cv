'use client';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { type FC, useCallback, useEffect, useRef, useState } from 'react';
import { pushState, useSearchParams } from '../hooks/useSearchParams';
import { useTranslations } from './intl';

export const VideoKeys = ['post', 'avaloq', 'trilux', 'kinect', 'local'] as const;
export type VideoType = (typeof VideoKeys)[number];
export const isVideoKey = (source: string | string[] | undefined | null): source is VideoType => {
  return typeof source === 'string' && (VideoKeys as readonly string[]).includes(source);
};

const VideoModal: FC = () => {
  const t = useTranslations('Video');
  const searchParams = useSearchParams();
  const [isMSEdge, setMSEdge] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeHandler = useCallback(() => {
    pushState(null, '', window.location.pathname);
  }, []);

  useEffect(() => {
    setMSEdge(window.navigator.userAgent.toLowerCase().includes('edg') && window.navigator.platform === 'Win32');
    // only allowed by user interaction
    videoRef.current?.play().catch((error) => {
      console.warn('Autoplay prevented:', error);
    });
  }, []);

  const video = isVideoKey(searchParams.get('video')) ? (searchParams.get('video') as VideoType) : null;

  return (
    <Dialog open={!!video} onClose={closeHandler} maxWidth="lg" fullWidth>
      {video && (
        <>
          <DialogTitle>{t(video)}</DialogTitle>
          <DialogContent>
            {/* biome-ignore lint/a11y/useMediaCaption: needed */}
            <video controls width="100%" ref={videoRef} poster={`/api/video/${video}.webp`} autoPlay>
              {!isMSEdge && <source src={`/api/video/${video}.av1.mp4`} type="video/mp4; codecs=av01.0.05M.08" />}
              <source src={`/api/video/${video}.m4v`} type="video/mp4; codecs=hvc1" />
              <source src={`/api/video/${video}.mp4`} type="video/mp4; codecs=avc1" />
              <source src={`/api/video/${video}.webm`} type="video/webm" />
              Sorry, your browser doesn&apos;t support embedded videos.
            </video>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default VideoModal;
