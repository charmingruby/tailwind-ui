import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input type="file" className="hidden" id="photo" {...props} />
}
