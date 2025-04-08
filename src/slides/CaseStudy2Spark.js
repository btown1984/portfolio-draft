import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Spark slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 55% 45%;
`;

const SparkLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${tokens.colors.neutrals.black};
`;

const SparkTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 5%;
  max-width: 90%;
`;

const SparkDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  margin-bottom: 8%;
  max-width: 90%;
`;

const SparkPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

const SparkPoint = styled.div`
  display: flex;
  align-items: flex-start;
`;

const PointMarker = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 50%;
  background-color: ${tokens.colors.accent.primary};
  margin-top: 0.5vw;
  margin-right: 1vw;
  flex-shrink: 0;
`;

const PointText = styled.div`
  font-size: ${tokens.typography.fontSize.lg};
  color: ${tokens.colors.neutrals.darkGray};
  line-height: 1.5;
`;

const SparkRight = styled.div`
  background-color: ${tokens.colors.backgrounds.dark};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8%;
`;

const AnimationFrame = styled.div`
  width: 100%;
  height: 60%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  margin-bottom: 1.5vw;
`;

const ExecutiveQuote = styled.div`
  position: relative;
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['2xl']};
  font-style: italic;
  font-weight: ${tokens.typography.fontWeight.light};
  line-height: 1.4;
  color: ${tokens.colors.neutrals.white};
  padding-left: 2vw;
  
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

const QuoteAttribution = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1vw;
  text-align: right;
`;

/**
 * CaseStudy2Spark: It Started with a Few Launch Animations
 * 
 * Layout: Split layout with narrative context on the left and visual evidence on the right
 * Content: Origin story with animation still and executive quote
 */
const CaseStudy2Spark = ({ onContentDrop }) => {
  // Points data
  const pointsData = [
    'One-off CG animations created for product launch presentations',
    'Initially used internally for vision and pitch meetings',
    'Immediate executive attention created unexpected opportunity'
  ];

  return (
    <SlideContainer>
      <SparkLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <SparkTitle>It Started with a Few Launch Animations...</SparkTitle>
        <SparkDescription>
          How modest CG animations for internal use sparked executive interest and set the stage for a new design discipline.
        </SparkDescription>
        
        <SparkPoints>
          {pointsData.map((point, index) => (
            <SparkPoint key={index}>
              <PointMarker />
              <PointText>{point}</PointText>
            </SparkPoint>
          ))}
        </SparkPoints>
      </SparkLeft>
      
      <SparkRight>
        <AnimationFrame>
          <ContentPlaceholder
            id="spark-animation"
            placeholderText="Drag early animation still here"
            isDropZone={true}
            onDrop={onContentDrop}
            $backgroundColor="rgba(255, 255, 255, 0.05)"
            $borderRadius="8px"
            $width="100%"
            $height="100%"
            $padding="0"
          />
        </AnimationFrame>
        
        <ExecutiveQuote>
          These animations communicate our product vision better than anything we've seen before. We need more of this.
          <QuoteAttribution>— VP of Design, 2015</QuoteAttribution>
        </ExecutiveQuote>
      </SparkRight>
    </SlideContainer>
  );
};

export default CaseStudy2Spark; 