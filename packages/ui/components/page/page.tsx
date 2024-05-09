import { Page as Ui5Page, type PagePropTypes } from '@ui5/webcomponents-react'

interface IPageProps extends PagePropTypes {}

export const Page = (props: IPageProps) => {
  return <Ui5Page {...props} />
}
