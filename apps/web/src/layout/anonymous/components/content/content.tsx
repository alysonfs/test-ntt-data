import './_content.scss'

interface IContentProps {
  children: React.ReactNode | React.ReactNode[]
}
export const Content = (props: IContentProps) => {
  return <main>{props.children}</main>
}
