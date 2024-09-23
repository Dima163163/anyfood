import { Counter } from '../Counter/Counter'

export const Item = ({type, text}) => {
  if (type === "menu") {
    return (
        <li>
          {text} <Counter/>
        </li>
    )
  }

  return (
    <li>{text}</li>
  )
};