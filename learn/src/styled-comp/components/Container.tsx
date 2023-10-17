import content from "../data"
import Card from "./Card"
import { Wrapper } from "./styles/Wrapper.styled"

const Container = () => {
  return (
    <Wrapper>
      {content.map((value, index) =>
        <Card key={index} {...value}></Card>
      )}
    </Wrapper>
  )
}

export default Container
