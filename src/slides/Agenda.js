import React, { useEffect, useState } from 'react';
import tokens from '../styles/tokens';
import { ItemTitle, BodyText } from '../components/Typography';
import { ContentList } from '../components/Layout';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Agenda Slide
 * 
 * Layout: Custom 60/40 grid, left light background, right dark background
 * Content: Section title on left, numbered list on right
 */

// Custom slide layout with 50/50 split
const AgendaLayout = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  overflow: hidden;
`;

const LeftColumn = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

// Updated AgendaTitle with stronger presence
const AgendaTitle = styled(motion.h1)`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 4.7vw; /* Slightly larger for more presence */
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  text-transform: uppercase;
  letter-spacing: 0.01em; /* Subtle letter spacing */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Subtle text shadow for depth */
`;

const RightColumn = styled.div`
  background: ${tokens.colors.gradients.darkBackground};
  padding: 10% 8% 10% 6%;
  color: ${tokens.colors.neutrals.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Improved agenda list using CSS Grid for consistent spacing
const AgendaList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr; /* Equal height rows */
  position: relative;
  width: 100%;
  height: 100%;
`;

// Divider styling without absolute positioning
const Divider = styled(motion.div)`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  transform-origin: left;
  margin: 0;
`;

// Create a wrapper for each agenda item with its own divider
const AgendaItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

// Each agenda item is a grid cell, now with animation
const AgendaItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 2.5vh 0;
  height: 100%;
`;

// Improved grid container for perfect alignment
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 3.5vw 1fr;
  grid-column-gap: 2.5vw;
  align-items: baseline;
  width: 100%;
`;

// Custom large number styling with animation
const NumberText = styled(motion.div)`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 2.8vw;
  font-weight: 700;
  line-height: 1;
  color: ${tokens.colors.neutrals.white};
  opacity: 1;
`;

// Modified item title with better line breaks and alignment
const AgendaItemTitle = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 1.6vw;
  font-weight: ${tokens.typography.fontWeight.medium};
  line-height: 1.3;
  max-width: 90%;
  display: block;
  color: ${tokens.colors.neutrals.white};
  opacity: 0.9;
`;

const Agenda = ({ animationState }) => {
  // Local animation control state
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Wait for slide transition to complete before triggering internal animations
  useEffect(() => {
    if (animationState === 'idle') {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [animationState]);

  const agendaData = [
    {
      number: '01',
      title: 'About Me'
    },
    {
      number: '02',
      title: 'Microsoft Surface Launches'
    },
    {
      number: '03',
      title: 'Building A Product Film Studio'
    },
    {
      number: '04',
      title: 'AI-Driven Visual Design'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
      }
    }
  };
  
  // Item animation variants
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  // Title animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  // Number animation variants
  const numberVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };
  
  // Divider animation variants
  const dividerVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0,
    },
    visible: index => ({
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1 + (index * 0.05),
      }
    })
  };

  return (
    <AgendaLayout>
      <LeftColumn>
        <AnimatePresence>
          {shouldAnimate && (
            <AgendaTitle
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              key="agenda-title"
            >
              AGENDA
            </AgendaTitle>
          )}
        </AnimatePresence>
      </LeftColumn>
      
      <RightColumn>
        <AnimatePresence>
          {shouldAnimate && (
            <AgendaList 
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              key="agenda-list"
            >
              {/* Agenda items */}
              {agendaData.map((item) => (
                <AgendaItemWrapper key={item.number}>
                  <AgendaItem variants={itemVariants}>
                    <ItemContainer>
                      <NumberText variants={numberVariants}>
                        {item.number}
                      </NumberText>
                      <AgendaItemTitle>
                        {item.title.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {i > 0 && <br />}
                            {line}
                          </React.Fragment>
                        ))}
                      </AgendaItemTitle>
                    </ItemContainer>
                  </AgendaItem>
                </AgendaItemWrapper>
              ))}
            </AgendaList>
          )}
        </AnimatePresence>
      </RightColumn>
    </AgendaLayout>
  );
};

export default Agenda; 