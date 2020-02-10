//Import Libraries
import React from 'react'
import styled from 'styled-components'
//Import Images
import LogoComp from '../aasets/LogoComp.svg'


//Styled
const LogoHeaderContainer = styled.div`
  position: absolute;
  display: inline-block;
  left: 50vw;
  transform: translate(-50%);
  top: 5vh;
  width: 380px;
  height: 50px;
`
const LogoIcon = styled.img`
  display: inline-block;
  position: relative;
  top: 2px;
`
const TitleBox = styled.div`
  display: inline-block;
  height: 25px;
  background: var(--aaronWhite);
  padding: 0 15px;
  margin-left: 20px;
  position: relative;
  top: -13px;
`
const Title = styled.h3`
  display: inline-block;
  line-height: 25px;
  font-size: 16px;
  color: var(--aaronBlack);
  letter-spacing: 1.5px;
  text-align: center;
`
const Role = styled.h3`
  display: inline-block;
  font-size: 16px;
  color: var(--aaronWhite);
  letter-spacing: 1.5px;
  margin-left: 15px;
  position: relative;
  top: -13px;
`


//Main Component
function Logo() {
  return (
    <>
    <LogoHeaderContainer>
      <LogoIcon src={LogoComp} alt="" />
      <TitleBox>
        <Title>Aaron Dormer</Title>
      </TitleBox>
      <Role>Film Director</Role>
    </LogoHeaderContainer>   
    </>
  );
}

export default Logo;
