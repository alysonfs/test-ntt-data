import { ButtonBase, type IButtonBaseProps } from '../base'

interface IButtonSearchProps extends Omit<IButtonBaseProps, 'icon' | 'iconEnd' | 'icon' | 'children'> {}

export const ButtonSearch = (props: IButtonSearchProps) => {
  return <ButtonBase {...props}>Search</ButtonBase>
}
