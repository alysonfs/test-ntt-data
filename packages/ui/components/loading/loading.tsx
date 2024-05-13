import { BusyIndicator, type BusyIndicatorPropTypes } from '@ui5/webcomponents-react'

export interface ILoadingProps extends BusyIndicatorPropTypes {
  text?: string
  textPlacement?: "Top" | "Bottom"
}

export const Loading = (props: ILoadingProps) => {
  return (
    <BusyIndicator text={props.text} text-placement={props.textPlacement || 'Bottom'} active>
      <div style={{
        height: "24px",
      }} />
    </BusyIndicator>
  )
}
