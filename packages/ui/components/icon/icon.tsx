import { Icon as Ui5Icon, type IconPropTypes } from '@ui5/webcomponents-react'
import '@ui5/webcomponents-icons/dist/heart.js'
import '@ui5/webcomponents-icons/dist/heart-2.js'
import '@ui5/webcomponents-icons/dist/favorite.js'
import '@ui5/webcomponents-icons/dist/unfavorite.js'

interface IIconProps extends IconPropTypes {}

export const Icon = (props: IIconProps) => {
  return <Ui5Icon {...props}>{props.children}</Ui5Icon>
}
