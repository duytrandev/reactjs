import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  position: relative;
  .move-left{
    margin-left: 5px;
  }
  width: 400px;
`
const ImageContainer = styled.div`
  height: 400px;
  width: 100%;
`
const ImageCard = styled.img`
  border-radius: 10px;
  object-fit: cover;
  height: 100%;
  width: 100%;
`
const CardContent = styled.div`
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: calc(10% - 10px);
  transform: translateY(50%);
  width: 80%;
  padding: 10px;
  border-radius: 20px;
`
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3{
    margin: 2px;
  }
`
const Info = styled.div`
  display: flex;
  align-items: center;
`
const Avatar = styled.img`
  border-radius: 40px;
  width: 40px;
  height: 40px;
  object-fit: cover;
`
const HeartItem = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  background-color: transparent;
`

const Card: React.FC = () => {
  return (
    <CardContainer >
      <ImageContainer>
        <ImageCard src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?resize=1200x900&vertical=center" alt="" />
      </ImageContainer>
      <CardContent>
        <CardInfo>
          <Info>
            <div>
              <Avatar src="https://encrypted-tbn0.gstatic.com/
              images?q=tbn:ANd9GcT5c6Jr6bQDvDYZRHHl1tf4GW373TSsYCJgi9edx1du&s" alt="" />
            </div>
            <span className='move-left'>@zndrson</span>
          </Info>
          <Info>
            <HeartItem src="https://media.istockphoto.com/id/1128400054/vector/heart-symbol-of-love-and-valentines-day-flat-red-icon-isolated-on-white-background-vector.jpg?s=612x612&w=0&k=20&c=COn_iSO6PaIo3SZX1vUfDia4xNQl12SjoLZ_y46I0fY=" alt="" />
            <span className='move-left'>256</span>
          </Info>
        </CardInfo>
        <CardInfo>
          <h3>Comsmic Perspective</h3>
          <span>12,000 PSL</span>
        </CardInfo>
      </CardContent>
    </CardContainer>
  )
}

export default Card
