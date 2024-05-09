import { Title as Ui5Title, type TitlePropTypes } from "@ui5/webcomponents-react"

interface ITitleProps extends TitlePropTypes {}

export const Title = (props: ITitleProps) => {
  return <Ui5Title {...props}>{props.children}</Ui5Title>
}
