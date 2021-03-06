//Import Libraries
import React from 'react'
import styled from 'styled-components'
//Import Images
import keepOnRolling from '../aasets/slideshow/keepOnRolling.png'
import leftArrow from '../aasets/leftArrow.svg'


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
  cursor: pointer;
  transition: all 0.4s ease-in-out; 
  img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover{
    background: var(--aaronWhite);
  }
`
const LeftArrow = styled(ArrowButton)`
  position: absolute;
  left: 0; 
`
const RightArrow = styled(ArrowButton)`
  position: absolute;
  right: 0;
  img{
   transform: translate(-50%, -50%) rotate(180deg);
  }
`
const SlideshowPlayButton = styled.div`
  position: absolute;
  top: calc( 50px + 5.625vh + 5vh + 68.75vh + 5vh - 10px);
  right: 18.0555556vw;
  cursor: pointer;
  span{
    display: inline-block;
    width: 80px;
    height: 30px;
    background: var(--aaronGrey75);
    color: var(--aaronBlack);
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1.17px;
    transition: all 0.4s ease-in-out;
    &:hover{
      background: var(--aaronWhite);
    }
  }
  
`
const SlideshowTitleContainer = styled.div`
  position: absolute;
  left: calc(67.0833333vw + 16.4583333vw + 30px);
  top: calc( 50px + 5.625vh + 5vh + 68.75vh + 5vh - 10px);
  margin-right: 20px;
`
const SlideshowTitle = styled.div`
  font-size: 14px;
  color: var(--aaronWhite);
  letter-spacing: 1.17px;
`
const SlideshowTitleClient = styled.div`
  font-size: 14px;
  color: var(--aaronGrey75);
  letter-spacing: 1.17px;
  margin-top: 2px;
`


//Main Component
function Home() {
  return (
    <>
      <SlideshowImage src={keepOnRolling} alt=""/>

      <SlideshowArrowContainer>
        <LeftArrow>
          <img src={leftArrow} alt="left arrow"/>
        </LeftArrow>
        <RightArrow>
         <img src={leftArrow} alt="right arrow"/>
        </RightArrow>
      </SlideshowArrowContainer>

      <SlideshowPlayButton>
        <span>Play</span>
      </SlideshowPlayButton>

      <SlideshowTitleContainer>
        <SlideshowTitle>Keep On Rolling</SlideshowTitle>
        <SlideshowTitleClient>Rizla</SlideshowTitleClient>
      </SlideshowTitleContainer>

      {/*
      <SlideshowNumber /> */}
    </>
  );
}

export default Home;
