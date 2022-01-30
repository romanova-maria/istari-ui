import React from 'react';
import StakingStrategies from './staking-strategies/StakingStrategies';
import { FirstStep, Step } from './components'
import ChoosingStrategies from './strategies/ChoosingStrategies';
import styled from 'styled-components';

const Header = styled.header`
  height: 100px;
  margin-bottom: 120px;
  
  :after, :before {
    position: absolute;
    content: '';
    box-sizing: border-box;
    background-color: black;
  }
  
  :before {
    top: 10px;
    left: 0;
    width: 83%;
    height: 144px;
    transform: skew(0deg, 3deg);
  }
  
  :after {
    top: 15px;
    right: 0;
    width: 17%;
    height: 136px;
    transform: skew(0deg, 345deg);
  }
  
  nav {
    height: 100%;
    position: relative;
    background-color: black;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 20px;
    
    a, img {
      height: inherit;
    }
  }
`;

const Comparing: React.FC = () => {
  return (
    <>
      <Header>
        <nav>
          <a href="/"><img alt="Company's logo" src="https://staging.entity.global/static/media/logo.177bbda6.png" /></a>
        </nav>
      </Header>
      <FirstStep>
        <ChoosingStrategies />
      </FirstStep>
      <Step>
        <StakingStrategies />
      </Step>
    </>
  )
};

export default Comparing;