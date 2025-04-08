import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Speed slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SpeedLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.dark};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${tokens.colors.neutrals.white};
`;

const SpeedTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 5%;
  max-width: 90%;
`;

const SpeedDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5%;
  max-width: 90%;
`;

const SpeedPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`;

const SpeedPoint = styled.div`
  display: flex;
  align-items: flex-start;
`;

const SpeedMarker = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 50%;
  background-color: ${tokens.colors.accent.primary};
  margin-top: 0.5vw;
  margin-right: 1vw;
  flex-shrink: 0;
`;

const SpeedText = styled.div`
  font-size: ${tokens.typography.fontSize.lg};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const SpeedStat = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 6vw;
  font-weight: ${tokens.typography.fontWeight.bold};
  color: ${tokens.colors.accent.primary};
  line-height: 1;
  margin-top: 2vw;
  text-align: center;
`;

const SpeedStatLabel = styled.div`
  font-size: ${tokens.typography.fontSize.lg};
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 0.5vw;
`;

const SpeedRight = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ComparisonHeading = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 2vw;
`;

const RenderComparison = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4vw;
`;

const RenderEngine = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

const EngineName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1vw;
`;

const EngineIcon = styled.div`
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  margin-right: 1vw;
  flex-shrink: 0;
  background-color: ${props => props.$bgColor || 'rgba(0, 0, 0, 0.05)'};
`;

const EngineTitle = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
`;

const EngineStats = styled.div`
  background-color: ${tokens.colors.neutrals.white};
  border-radius: ${tokens.borders.radius.card};
  padding: 1.5vw;
  box-shadow: ${tokens.shadows.sm};
`;

const EngineStat = styled.div`
  margin-bottom: 1vw;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StatTitle = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.gray};
  margin-bottom: 0.3vw;
`;

const StatBarContainer = styled.div`
  width: 100%;
  height: 1vw;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.5vw;
  overflow: hidden;
`;

const StatBar = styled.div`
  height: 100%;
  border-radius: 0.5vw;
  background-color: ${props => props.$bgColor || 'rgba(255, 51, 102, 0.7)'};
  width: ${props => props.$width || '50%'};
`;

const FrameComparison = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FrameExample = styled.div`
  width: 48%;
`;

const FrameImageContainer = styled.div`
  width: 100%;
  height: 10vw;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  margin-bottom: 0.8vw;
`;

const FrameLabel = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.gray};
  text-align: center;
`;

/**
 * CaseStudy2Speed: Frame Rates, Render Times, and What Gets Cut
 * 
 * Layout: Split layout with points on the left and performance metrics on the right
 * Content: Render engine comparison and impact on creative process
 */
const CaseStudy2Speed = ({ onContentDrop }) => {
  // Speed points data
  const speedPoints = [
    'Started with V-Ray—high quality but limited iteration cycles',
    'Moved to Redshift—significantly faster, enabling more creative options',
    'Increased render speed led to greater creative experimentation'
  ];
  
  // Engine stats data
  const vrayStats = [
    { title: 'Render Time (1080p frame)', width: '95%' },
    { title: 'Iterations Per Day', width: '20%' },
    { title: 'Ideas Explored', width: '25%' }
  ];
  
  const redshiftStats = [
    { title: 'Render Time (1080p frame)', width: '25%' },
    { title: 'Iterations Per Day', width: '80%' },
    { title: 'Ideas Explored', width: '90%' }
  ];

  return (
    <SlideContainer>
      <SpeedLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <SpeedTitle>Frame Rates, Render Times, and What Gets Cut</SpeedTitle>
        <SpeedDescription>
          How technical decisions directly impacted creative exploration and idea selection.
        </SpeedDescription>
        
        <SpeedPoints>
          {speedPoints.map((point, index) => (
            <SpeedPoint key={index}>
              <SpeedMarker />
              <SpeedText>{point}</SpeedText>
            </SpeedPoint>
          ))}
        </SpeedPoints>
        
        <SpeedStat>80-90%</SpeedStat>
        <SpeedStatLabel>of ideas get cut: iteration speed is everything</SpeedStatLabel>
      </SpeedLeft>
      
      <SpeedRight>
        <ComparisonHeading>Render Engine Comparison</ComparisonHeading>
        
        <RenderComparison>
          <RenderEngine>
            <EngineName>
              <EngineIcon $bgColor="rgba(100, 149, 237, 0.2)" />
              <EngineTitle>V-Ray</EngineTitle>
            </EngineName>
            <EngineStats>
              {vrayStats.map((stat, index) => (
                <EngineStat key={index}>
                  <StatTitle>{stat.title}</StatTitle>
                  <StatBarContainer>
                    <StatBar $bgColor="rgba(100, 149, 237, 0.7)" $width={stat.width} />
                  </StatBarContainer>
                </EngineStat>
              ))}
            </EngineStats>
          </RenderEngine>
          
          <RenderEngine>
            <EngineName>
              <EngineIcon $bgColor="rgba(255, 51, 102, 0.2)" />
              <EngineTitle>Redshift</EngineTitle>
            </EngineName>
            <EngineStats>
              {redshiftStats.map((stat, index) => (
                <EngineStat key={index}>
                  <StatTitle>{stat.title}</StatTitle>
                  <StatBarContainer>
                    <StatBar $bgColor="rgba(255, 51, 102, 0.7)" $width={stat.width} />
                  </StatBarContainer>
                </EngineStat>
              ))}
            </EngineStats>
          </RenderEngine>
        </RenderComparison>
        
        <FrameComparison>
          <FrameExample>
            <FrameImageContainer>
              <ContentPlaceholder
                id="vray-render"
                placeholderText="Drag V-Ray render here"
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="rgba(0, 0, 0, 0.05)"
                $borderRadius="6px"
                $width="100%"
                $height="100%"
                $padding="0"
              />
            </FrameImageContainer>
            <FrameLabel>V-Ray: 45 minutes per frame</FrameLabel>
          </FrameExample>
          
          <FrameExample>
            <FrameImageContainer>
              <ContentPlaceholder
                id="redshift-render"
                placeholderText="Drag Redshift render here"
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="rgba(0, 0, 0, 0.05)"
                $borderRadius="6px"
                $width="100%"
                $height="100%"
                $padding="0"
              />
            </FrameImageContainer>
            <FrameLabel>Redshift: 5 minutes per frame</FrameLabel>
          </FrameExample>
        </FrameComparison>
      </SpeedRight>
    </SlideContainer>
  );
};

export default CaseStudy2Speed; 