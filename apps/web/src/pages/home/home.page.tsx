import { Button, Icon } from '@ntt-data/ui/components'
import './_home.scss'

export default function HomePage() {
  return (
    <div>
      <p>Content</p>
      <p>
        <Icon name="favorite" />
        <Icon name="unfavorite" />
        <Icon name="heart" />
        <Icon name="heart-2" />
      </p>

      <Button>Search</Button>
      <Button>Reset</Button>
      <Button icon={'heart-2'} iconEnd>
        Favorite
      </Button>
    </div>
  )
}
