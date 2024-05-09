import { Header, Footer, Content } from './components'

interface AnonymousLayoutProps {
  children: React.ReactNode
}

export const AnonymousLayout = (props: AnonymousLayoutProps) => {
  return (
    <div id="app-container">
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </div>
  )
}
