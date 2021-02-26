import React from 'react';
import home1 from '../img/home1.png';
import {StyledAbout, StyledDescription, StyledHide, StyledImage} from '../style';

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './wave';

const AboutSection = () => {

  return (
    <StyledAbout>
      <StyledDescription>
        <div>
          <StyledHide>
            <motion.h2
              variants={titleAnim}
            >We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
              variants={titleAnim}
            >your <span>dreams</span> come</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
              variants={titleAnim}
            > true</motion.h2>
          </StyledHide>
        </div>
        <motion.p
          variants={fade}
        >Contact us for any phtography or videography ideas that you have. We have professional with amazing skills.
        </motion.p>
        <motion.button
          variants={fade}
        >Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img 
          variants={photoAnim}
          initial='hidden'
          animate='show'
          src={home1} 
          alt="guy with a camera" 
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

// //Styled Components
// const StyledAbout = styled.div`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5rem 10rem;
//   color: white;
// `;

// const StyledDescription = styled.div`
//   flex: 1;
//   padding-right: 5rem;
//   h2 {
//     font-weight: lighter;
//   }
// `;

// const StyledImage = styled.div`
//   flex: 1;
//   overflow: hidden;
//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// const StyledHide = styled.div`
//   overflow: hidden;
// `;



export default AboutSection;
