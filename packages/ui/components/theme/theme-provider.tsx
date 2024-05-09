import { ThemeProvider, type ThemeProviderPropTypes } from '@ui5/webcomponents-react'

interface IThemeProviderFactoryProps extends ThemeProviderPropTypes {}

export const ThemeProviderFactory = (props: IThemeProviderFactoryProps) => {
  return <ThemeProvider {...props}>{props.children}</ThemeProvider>
}
