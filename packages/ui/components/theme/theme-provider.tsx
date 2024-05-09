import { ThemeProvider } from "@ui5/webcomponents-react"

interface IThemeProviderFactoryProps {
  children: React.ReactElement
}

export const ThemeProviderFactory = (props: IThemeProviderFactoryProps) => {
  return <ThemeProvider>{props.children}</ThemeProvider>
}
