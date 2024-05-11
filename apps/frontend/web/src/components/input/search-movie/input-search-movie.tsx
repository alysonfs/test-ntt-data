import { InputBase, type IInputBaseProps } from '../base'

interface IInputSearchMovieProps extends Omit<IInputBaseProps, 'placeholder'> {
  onChange: (value: any) => void
}

export const InputSearchMovie = (props: IInputSearchMovieProps) => {
  return <InputBase {...props} placeholder="Search Movie" />
}
