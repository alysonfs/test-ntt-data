import { Icon } from "@ntt-data/ui/components";
import './_stars.scss'

export interface IStarsProps {
  rate: number;
}

export const Stars = (props: IStarsProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (props.rate >= i) {
      stars.push(<Icon key={i.toString()} className="star" name="favorite" />)
    } else {
      stars.push(<Icon key={i.toString()} className="star" name="unfavorite" />)
    }
  }

  return (
    <>
      {stars}
    </>
  )
}
