import React from 'react';
import styled from 'styled-components';
import { StyledAbout } from '../style'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion';

import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';

const FaqSection = () => {
  const [element, controls] = useScroll();

  // const ToTheTOP = () => {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   })
  // }
  return (
    <StyledFaq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start ?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae iste doloremque earum provident veniam adipisci tenetur in omnis quod.
                </p>
            </div>
        </Toggle>
    
        <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae iste doloremque earum provident veniam adipisci tenetur in omnis quod.</p>
            </div>
        </Toggle>
        
        <Toggle title="Different Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae iste doloremque earum provident veniam adipisci tenetur in omnis quod.</p>
            </div>
        </Toggle>
        
        <Toggle title="What Products do you offer ?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quae iste doloremque earum provident veniam adipisci tenetur in omnis quod.</p>
            </div>
        </Toggle>
      </AnimateSharedLayout>
      {/* <button onClick={ToTheTOP}>To the top</button> */}
      
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
