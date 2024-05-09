import { Text as Ui5Text, type TextPropTypes } from "@ui5/webcomponents-react"

interface ITextProps extends TextPropTypes {}

export const Text = (props: ITextProps) => {
  return <Ui5Text {...props}>{props.children}</Ui5Text>
}
