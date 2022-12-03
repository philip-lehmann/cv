declare module '@bootstrap-styled/v4' {
  import { FC, PropsWithChildren } from 'react'

  export const Hr: FC<ComponentProps<'hr'>>
  export const H1: FC<ComponentProps<'h1'>>
  export const H2: FC<ComponentProps<'h2'>>
  export const H3: FC<ComponentProps<'h3'>>
  export const H4: FC<ComponentProps<'h4'>>
  export const H5: FC<ComponentProps<'h5'>>
  export const H6: FC<ComponentProps<'h6'>>
  export const Ul: FC<ComponentProps<'ul'>>
  export const Ol: FC<ComponentProps<'ol'>>
  export const Li: FC<ComponentProps<'li'>>
  export const CardText: FC<ComponentProps<'div'>>
  export const A: FC<ComponentProps<'a'>>
  export const Img: FC<ComponentProps<'img'>>
  export const Badge: FC<ComponentProps<'span'> & { role: string }>

  interface TooltipProps extends ComponentProps<'div'> {
    placement: 'top'
    isOpen: boolean
    target: string
    toggle: () => void
  }
  export const Tooltip: FC<PropsWithChildren<TooltipProps>>
  export const Progress: FC<PComponentProps<'div'>>
  interface ProgressBarProps {
    valueNow: number
  }
  export const ProgressBar: FC<PropsWithChildren<ProgressBarProps>>
  export const Modal: FC<
    ComponentProps<'div'> & {
      isOpen: boolean
      size: 'sm' | 'lg'
      toggle: () => void
      onClosed: () => void
      onOpened: () => void
    }
  >
  export const ModalHeader: FC<ComponentProps<'div'> & { toggle: () => void }>
  export const ModalBody: FC<ComponentProps<'div'>>
  export const Container: FC<ComponentProps<'div'>>
  export const Row: FC<ComponentProps<'div'>>
  export const Col: FC<ComponentProps<'div'>>
  export const Header: FC<ComponentProps<'header'>>
  export const CardBlock: FC<ComponentProps<'div'>>
  export const Card: FC<ComponentProps<'div'>>
  export const CardTitle: FC<ComponentProps<'h4'>>
  export const Button: FC<ComponentProps<'button'>>
  export const ButtonGroup: FC<ComponentProps<'div'>>
}
