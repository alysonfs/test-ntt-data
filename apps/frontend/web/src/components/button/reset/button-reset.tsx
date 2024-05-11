import { ButtonBase, type IButtonBaseProps } from '../base'

interface IButtonResetProps extends Omit<IButtonBaseProps, 'icon' | 'iconEnd' | 'children'> {
  onClick: () => void
}

export const ButtonReset = (props: IButtonResetProps) => {
  return <ButtonBase {...props}>Reset</ButtonBase>
}
