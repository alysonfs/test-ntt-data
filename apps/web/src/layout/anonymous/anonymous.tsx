import { Header, Footer, Content } from './components'
import './_anonymous.scss'

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
