import { Text, Title, Loading } from '@ntt-data/ui/components'
import { ButtonFavorite, ButtonReset, ButtonSearch, InputSearchMovie } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import './_home-page.scss'
import { getMovie } from './request'
import { selectMovie, setMovie, initialStateMovie } from './reducers/movie.reduce'
import { Stars } from './components'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const movie = useSelector(selectMovie)
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (message !== '') {
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }, [message])

  const onSearchHandler = async () => {
    setMessage('')
    if (title.length > 3) {
      setLoad(true)
      const result = await getMovie(title)
      if (result) {
        dispatch(setMovie(result))
      } else {
        setMessage('We didn`t sniff out any films with that name.Try again!')
      }
      setLoad(false)
    } else {
      setMessage('Oops! It seems like your search is too short for us to sniff out. Please enter more than three letters and try again!')
    }
  }

  const onResetHandler = () => {
    dispatch(setMovie(initialStateMovie))
  }

  const onChangeHandler = (event: any) => {
    event.preventDefault()
    const length = event.target.value.length
    if (length > 3) {
      const value = event.target.value
      setTitle(value)
    }
  }

  const onFavoriteHandler = () => {
    alert('Thank you for your feedback!')
  }

  const showMovie = movie.movieId !== undefined && movie.movieId !== ''
  const showMessage = message && message !== ''
  const showLoading = load

  return (
    <div className="container">
      <div className="top-area">
        <div className="title">
          <Title> Search Movie </Title>
          <Text>
            Welcome to Sniffer! Use our search function and let your movie buff instincts sniff out the best films out there. Get ready to sniff out fun and excitement with every click! Let the cinematic hunt begin!"
          </Text>
        </div>
        <div className="search-area">
          <InputSearchMovie onChange={onChangeHandler} />
          <ButtonSearch onClick={onSearchHandler} />
          <ButtonReset onClick={onResetHandler} />
        </div>
        {showLoading && <Loading active={load} />}
        {showMessage && <Text >{message}</Text>}
      </div>
      {
        showMovie && <div className="movie-area">
          <div className="about-area">
            <Title>{movie.title}</Title>
            <div className="description">
              <Text>
                {movie.plot}
              </Text>
            </div>
            <div className="actor">
              <Text className="bold">Actor:</Text>
              {movie.actors.map((actor: string, index: number) => (
                <Text key={index.toString()}>{actor}</Text>
              ))}
            </div>
            <div className="review">
              <Text className="bold">Review</Text>
              <div className="stars">
                <Stars rate={movie.ratingStars || 2} />
              </div>
            </div>
            <div className="button">
              <ButtonFavorite onClick={onFavoriteHandler} />
            </div>
          </div>
          {
            (movie.poster === undefined || movie.poster === '') ?
              <div className="poster-area">
                <div className="image">
                  <img src="https://placehold.co/300x400" alt="poster" />
                </div>
              </div>
              :
              <div className="poster-area">
                <div className="image">
                  <img src={movie.poster} alt="poster" />
                </div>
              </div>
          }
        </div>
      }
    </div>
  )
}
