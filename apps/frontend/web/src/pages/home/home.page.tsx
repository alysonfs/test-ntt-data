import { Icon, Text, Title } from '@ntt-data/ui/components'
import { ButtonFavorite, ButtonReset, ButtonSearch, InputSearchMovie } from '../../components'
import { useSelector } from 'react-redux'
import './_home-page.scss'
import { getMovie } from './request'
import { selectMovie } from './reducers/movie.reduce'

export default function HomePage() {
  const movie = useSelector(selectMovie)
  // const newState = selectMovie()
  // console.log(movieSlice, selectMovie, movie)
  console.log(movie)

  const onSearchHandler = async () => {
    const result = await getMovie('batman')
    console.log(result)
  }

  return (
    <div className="container">
      <div className="top-area">
        <div className="title">
          <Title> Search Movie </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptatum molestias possimus assumenda at
            sunt totam incidunt maxime mollitia expedita distinctio, dignissimos iure fugit in odio quo numquam deleniti
            consequuntur?
          </Text>
        </div>
        <div className="search-area">
          <InputSearchMovie />
          <ButtonSearch onClick={onSearchHandler} />
          <ButtonReset />
        </div>
      </div>
      <div className="movie-area">
        <div className="about-area">
          <Title>{movie}</Title>
          <div className="description">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, hic incidunt! Doloremque aperiam, pariatur
              asperiores dolore harum temporibus quaerat! Minus similique totam molestiae animi, quae sit! Tempora vel
              reiciendis molestias! Odio maxime pariatur tempora eveniet eius recusandae fuga! Ea sunt nostrum sed
              alias, fuga voluptatibus velit vero aspernatur similique. Quas sed beatae dolorum laboriosam nesciunt.
            </Text>
          </div>
          <div className="actor">
            <Text className="bold">Actor:</Text>
            <Text>John Doe</Text>
          </div>
          <div className="review">
            <Text className="bold">Review</Text>
            <div className="stars">
              <Icon name="favorite" />
              <Icon name="favorite" />
              <Icon name="favorite" />
              <Icon name="favorite" />
              <Icon name="favorite" />
            </div>
          </div>
          <div className="button">
            <ButtonFavorite />
          </div>
        </div>
        <div className="poster-area">
          <div className="image">
            <img src="https://via.placeholder.com/200x350" alt="poster" />
          </div>
        </div>
      </div>
    </div>
  )
}
