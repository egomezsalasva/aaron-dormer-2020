//Import Libraries
import React from 'react'
import styled from 'styled-components'


//Styles
const SlideshowBox = styled.div`
  width: 67.0833333vw;
  height: 68.75vh;
  background: grey;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: calc( 50px + 5.625vh + 5vh );
`


//Main Component
function Home() {
  return (
    <>
      <SlideshowBox />
      {/* <SlideshowImage />
      <SlideshowArrows />
      <SlideshowPlayButton />
      <SlideshowTitle />
      <SlideshowNumber /> */}
    </>
  );
}

export default Home;
