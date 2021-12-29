import React, { FC, useState, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Modal, ModalHeader, ModalBody } from '@bootstrap-styled/v4'
import { useRouter } from 'next/router'

interface VideoModalProps {
  video: string
  title: string
}

interface DisableScrollProps {
  element: HTMLElement
  disabled: boolean
}

const useDisableScroll = ({ element, disabled }: DisableScrollProps): void => {
  useEffect(() => {
    element.style.overflowY = disabled ? 'hidden' : 'scroll'

    return () => {
      element.style.overflowY = 'scroll'
    }
  }, [disabled])
}

const VideoModal: FC<VideoModalProps> = ({ video, title }) => {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>()

  const [open, setOpen] = useState(false)
  const closeHandler = useCallback(() => {
    setOpen(false)
  }, [])
  const closedHandler = useCallback(() => {
    router.push({ query: {} }, null, { scroll: false })
  }, [])
  const openedHandler = useCallback(() => {
    try {
      // only allowed by user interaction
      videoRef.current?.play()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  }, [videoRef.current])
  useEffect(() => {
    setOpen(true)
  }, [])
  useDisableScroll({ element: document.body, disabled: open })

  return createPortal(
    <Modal isOpen={open} size="lg" toggle={closeHandler} onClosed={closedHandler} onOpened={openedHandler}>
      <ModalHeader toggle={closeHandler}>{title}</ModalHeader>
      <ModalBody>
        <video controls width="100%" ref={videoRef} src={`/api/video/${video}.mp4`}>
          <source src={`/api/video/${video}.m4v`} type="video/mp4; codecs='hvc1'" />
          <source src={`/api/video/${video}.mp4`} type="video/mp4; codecs='avc1'" />
          <source src={`/api/video/${video}.webm`} type="video/webm" />
          Sorry, your browser doesn&apos;t support embedded videos.
        </video>
      </ModalBody>
    </Modal>,
    document.body
  )
}

export default VideoModal
