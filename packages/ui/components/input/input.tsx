import { Input as Ui5Input, type InputPropTypes } from '@ui5/webcomponents-react'

export interface IInputProps extends InputPropTypes {}

export const Input = (props: IInputProps) => {
  return <Ui5Input {...props} />
}
