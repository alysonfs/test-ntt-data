import { Button, type IButtonProps } from '@ntt-data/ui/components'
import './_button-base.scss'

export interface IButtonBaseProps extends IButtonProps { }

export const ButtonBase = (props: IButtonBaseProps) => {
  return (
    <Button className="button-base" {...props}>
      {props.children}
    </Button>
  )
}
