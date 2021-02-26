import React from 'react';

//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

//Styled
import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledImage} from '../style';
import {fade} from '../animation';
import {useScroll} from './useScroll';

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services 
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>High <span id="title">Quality</span> services.</h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock"/>
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork"/>
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm"/>
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="money"/>
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </StyledCard>
        </StyledCards>
      
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="home"/>
      </StyledImage>
    </Services>
  )
};

const Services = styled(StyledAbout)`
  h2{
    padding-bottom: 5rem;
  }
  p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCard = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
