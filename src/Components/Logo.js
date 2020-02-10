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
  top: 40px;
  width: 380px;
`
const LogoIcon = styled.img`
  display: inline-block;
`
const TitleBox = styled.div`
  display: inline-block;
  height: 25px;
  background: var(--aaronWhite);
  padding: 0 20px;
  margin-left: 15px;
  position: relative;
  top: -14px;
`
const Title = styled.h3`
  display: inline-block;
  line-height: 25px;
  font-size: 18px;
  color: var(--aaronBlack);
  letter-spacing: 1.5px;
`
const Role = styled.h3`
  display: inline-block;
  font-size: 18px;
  color: var(--aaronWhite);
  letter-spacing: 1.5px;
  margin-left: 15px;
  position: relative;
  top: -14px;
`

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
