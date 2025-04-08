import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Reflections slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ReflectionLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ReflectionTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 5%;
  max-width: 90%;
`;

const ReflectionDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  margin-bottom: 5%;
  max-width: 90%;
`;

const ReflectionPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

const ReflectionPoint = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ReflectionMarker = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 50%;
  background-color: ${tokens.colors.accent.primary};
  margin-top: 0.5vw;
  margin-right: 1vw;
  flex-shrink: 0;
`;

const ReflectionText = styled.div`
  font-size: ${tokens.typography.fontSize.lg};
  color: ${tokens.colors.neutrals.darkGray};
  line-height: 1.5;
`;

const ReflectionQuote = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['2xl']};
  font-style: italic;
  font-weight: ${tokens.typography.fontWeight.light};
  line-height: 1.4;
  color: ${tokens.colors.neutrals.black};
  position: relative;
  padding-left: 2vw;
  margin-top: 3vw;
  
  &::before {
    content: '"';
    position: absolute;
    left: 0;
    top: -0.5vw;
    font-size: 3vw;
    color: ${tokens.colors.accent.primary};
    font-style: normal;
  }
`;

const ReflectionRight = styled.div`
  background-color: ${tokens.colors.backgrounds.dark};
  position: relative;
  overflow: hidden;
`;

/**
 * CaseStudy2Reflections: Reflections & Takeaway
 * 
 * Layout: Split layout with content on the left and image on the right
 * Content: Final thoughts and key takeaways
 */
const CaseStudy2Reflections = ({ onContentDrop }) => {
  // Reflection points data
  const reflectionPoints = [
    'Building a specialized design team requires balancing technical expertise with creative vision',
    'Infrastructure and process investments have outsized returns on creative output',
    'Hybrid workflows push both CG and live action disciplines further than either could go alone',
    'Team evolution must be guided by business needs, not just creative ambition'
  ];

  return (
    <SlideContainer>
      <ReflectionLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <ReflectionTitle>Reflections & Takeaway</ReflectionTitle>
        <ReflectionDescription>
          Lessons learned from building a specialized creative team from the ground up.
        </ReflectionDescription>
        
        <ReflectionPoints>
          {reflectionPoints.map((point, index) => (
            <ReflectionPoint key={index}>
              <ReflectionMarker />
              <ReflectionText>{point}</ReflectionText>
            </ReflectionPoint>
          ))}
        </ReflectionPoints>
        
        <ReflectionQuote>
          The most innovative creative work happens at the intersection of process discipline and creative freedom.
        </ReflectionQuote>
      </ReflectionLeft>
      
      <ReflectionRight>
        <ContentPlaceholder
          id="reflection-image"
          placeholderText="Drag reflection image here"
          isDropZone={true}
          onDrop={onContentDrop}
          $backgroundColor="rgba(255, 255, 255, 0.05)"
          $borderRadius="0"
          $width="100%"
          $height="100%"
          $padding="0"
        />
      </ReflectionRight>
    </SlideContainer>
  );
};

export default CaseStudy2Reflections; 