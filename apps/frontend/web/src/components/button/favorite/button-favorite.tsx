import { ButtonBase, type IButtonBaseProps } from '../base'

interface IButtonFavoriteProps extends Omit<IButtonBaseProps, 'icon' | 'iconEnd' | 'children'> { }

export const ButtonFavorite = (props: IButtonFavoriteProps) => {
  return (
    <ButtonBase {...props} icon="heart-2" iconEnd>
      Favorite
    </ButtonBase>
  )
}
