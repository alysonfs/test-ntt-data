import { Input, type IInputProps } from '@ntt-data/ui/components'
import './_input-base.scss'

export interface IInputBaseProps extends IInputProps {
  placeholder: string
}

export const InputBase = (props: IInputBaseProps) => {
  return <Input className="input-base" {...props} />
}
