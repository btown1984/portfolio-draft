import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StatsEyebrow, 
  StatsSubtitle,
  StatContext
} from '../components/Typography';
import { 
  StatsLayout,
  StatsBgNumber,
  StatsContent as BaseStatsContent,
  StatsHeader as BaseStatsHeader,
  StatsGrid
} from '../components/SlideLayouts';
import StatCard from '../components/StatCard';
import tokens from '../styles/tokens';

/**
 * About1: Stats Card Layout with Images
 * 
 * Layout: Dark gradient background with large background number
 * Content: Header with title/subtitle and 3 interactive stat cards with images
 */

// Main content container that houses everything
const MainContainer = styled.div`
  width: 85%;
  max-width: 1600px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Override StatsContent to remove default padding
const StatsContent = styled(BaseStatsContent)`
  padding: 0;
  height: auto;
  width: 100%;
`;

// Header section with proper full-width alignment
const HeaderSection = styled.div`
  width: 100%;
  margin-bottom: 4vh;
`;

// Enhanced title with italic "of" - centered but extends full width
const EnhancedTitle = styled(motion.h2)`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 4.2vw;
  line-height: ${tokens.typography.lineHeight.editorial.statsTitle};
  font-weight: ${tokens.typography.fontWeight.editorial.statsTitle};
  color: ${tokens.colors.neutrals.white};
  width: 100%;
  text-align: center;
  white-space: nowrap;
  
  .highlight {
    font-style: italic;
    font-weight: 400;
    text-transform: lowercase;
    letter-spacing: 0.02em;
  }
`;

// Card grid with animation capabilities
const CardGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5vw;
  width: 100%;
  height: 54vh;
`;

const About1 = ({ onContentDrop, animationState }) => {
  // Animation control state
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // Wait for slide transition to complete before triggering internal animations
  useEffect(() => {
    if (animationState === 'idle') {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [animationState]);
  
  // Data for the statistics
  const statsData = [
    {
      id: 'card-3d-art',
      value: '25',
      yearText: 'Years',
      description: '3D Art & Animation',
      initialImage: null
    },
    {
      id: 'card-product-viz',
      value: '17',
      yearText: 'Years',
      description: 'Product Visualization',
      initialImage: null
    },
    {
      id: 'card-leadership',
      value: '12',
      yearText: 'Years',
      description: 'Leadership',
      initialImage: null
    }
  ];

  // Animation variants
  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0,
      }
    }
  };
  
  const cardsContainerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    }
  };

  // Handler for propagating media updates to parent component
  const handleMediaUpdate = (id, filePath) => {
    if (onContentDrop) {
      onContentDrop(id, filePath);
    }
  };

  return (
    <StatsLayout>
      <StatsBgNumber style={{ opacity: 0.06 }}>25</StatsBgNumber>
      <MainContainer>
        <StatsContent>
          <HeaderSection>
            <AnimatePresence>
              {shouldAnimate && (
                <EnhancedTitle
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  25 YEARS <span className="highlight">of</span> ART + TECH
                </EnhancedTitle>
              )}
            </AnimatePresence>
          </HeaderSection>
          
          <AnimatePresence>
            {shouldAnimate && (
              <CardGrid
                variants={cardsContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {statsData.map((stat, index) => (
                  <motion.div key={index} variants={cardVariants}>
                    <StatCard
                      id={stat.id}
                      statValue={stat.value}
                      statSuffix={stat.yearText}
                      description={stat.description}
                      initialImage={stat.initialImage}
                      onMediaUpdate={handleMediaUpdate}
                    />
                  </motion.div>
                ))}
              </CardGrid>
            )}
          </AnimatePresence>
        </StatsContent>
      </MainContainer>
    </StatsLayout>
  );
};

export default About1; 