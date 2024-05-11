import { Text } from '@ntt-data/ui/components'
import './_footer.scss'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white">
      <Text>© {year} NTT - Data</Text>
    </footer>
  )
}
