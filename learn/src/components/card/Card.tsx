import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  position: relative;
`
const ImageContainer = styled.div`
  height: 400px;
  width: 400px;
`
const ImageCard = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
const CardContent = styled.div`
background-color: red;
  position: absolute;
  bottom: 0;
  width: 520px;
  height: 180px;
`
const ImageContent = styled.img`
  object-fit: cover;
`
const Card: React.FC = () => {
  return (
    <CardContainer>
      <ImageContainer>
        <ImageCard src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?resize=1200x900&vertical=center" alt="" />
      </ImageContainer>
      <CardContent>
        <div>
          <div>
            <div>
              <ImageContent src="https://encrypted-tbn0.gstatic.com/
              images?q=tbn:ANd9GcT5c6Jr6bQDvDYZRHHl1tf4GW373TSsYCJgi9edx1du&s" alt="" />
            </div>
            <span>@zndrson</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>256</span>
          </div>
        </div>
        <div>
          <h3>Comsmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </CardContent>
    </CardContainer>
  )
}

export default Card
