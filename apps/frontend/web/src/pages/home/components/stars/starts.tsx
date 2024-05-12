import { Icon } from "@ntt-data/ui/components";

export interface IStarsProps {
  rate: number;
}

export const Stars = (props: IStarsProps) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (props.rate >= i) {
      stars.push(<Icon name="star" color="" />)
    } else {
      stars.push(<Icon name="star" color="" />)
    }
  }


  return (
    <>
      {stars}
    </>
  )
}
