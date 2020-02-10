//Import Libraries
import React from 'react'
import styled from 'styled-components'
//Import Images
import keepOnRolling from '../aasets/slideshow/keepOnRolling.png'


//Styles
const SlideshowImage = styled.img`
  width: 67.0833333vw;
  height: 68.75vh;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: calc( 50px + 5.625vh + 5vh );
  object-fit: cover;
  object-position: center;
`
const SlideshowArrowContainer = styled.div`
  width: 80px;
  height: 30px;
  position: absolute;
  top: calc( 50px + 5.625vh + 5vh + 68.75vh + 5vh - 10px);
  left: 18.0555556vw;
`
const ArrowButton = styled.div`
  background: var(--aaronGrey75);
  width: 30px;
  height: 30px;
`
const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: 0; 
`
const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: 0;
`

//Main Component
function Home() {
  return (
    <>
      <SlideshowImage src={keepOnRolling} alt=""/>
      <SlideshowArrowContainer>
        <LeftArrow>

        </LeftArrow>
        <RightArrow>

        </RightArrow>
      </SlideshowArrowContainer>
      {/*
      <SlideshowPlayButton />
      <SlideshowTitle />
      <SlideshowNumber /> */}
    </>
  );
}

export default Home;
