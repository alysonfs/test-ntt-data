import { Button as Ui5Button, type ButtonPropTypes } from '@ui5/webcomponents-react'

export interface IButtonProps extends ButtonPropTypes {}

export const Button = (props: IButtonProps) => {
  return <Ui5Button {...props}>{props.children}</Ui5Button>
}
