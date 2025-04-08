import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Team slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 45% 55%;
`;

const TeamLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.dark};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TeamTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 5%;
  max-width: 90%;
`;

const TeamDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5%;
  max-width: 90%;
`;

const TeamPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  margin-top: 1vw;
`;

const TeamPoint = styled.div`
  display: flex;
  align-items: flex-start;
`;

const TeamMarker = styled.div`
  width: 0.5vw;
  height: 0.5vw;
  border-radius: 50%;
  background-color: ${tokens.colors.accent.primary};
  margin-top: 0.5vw;
  margin-right: 1vw;
  flex-shrink: 0;
`;

const TeamText = styled.div`
  font-size: ${tokens.typography.fontSize.lg};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const TeamRight = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TimelineContainer = styled.div`
  height: 100%;
  position: relative;
  padding-left: 3vw;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 0;
  width: 2px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3vw;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: -3vw;
  top: 0.3vw;
  width: 1.2vw;
  height: 1.2vw;
  background-color: ${tokens.colors.accent.primary};
  border-radius: 50%;
`;

const TimelineYear = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.accent.primary};
  margin-bottom: 0.5vw;
`;

const TimelineTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 0.5vw;
`;

const TimelineDescription = styled.p`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.darkGray};
  line-height: 1.5;
`;

const OrgPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vw;
  height: 6vw;
`;

const OrgElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5vw;
  border-radius: 0.5vw;
  margin: 0 0.5vw;
  background-color: ${props => props.$bgColor || 'rgba(255, 51, 102, 0.1)'};
  border: 1px solid ${props => props.$borderColor || tokens.colors.accent.primary};
`;

const OrgElementTitle = styled.div`
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  text-align: center;
`;

const OrgElementCount = styled.div`
  font-size: ${tokens.typography.fontSize.sm};
  color: ${tokens.colors.neutrals.gray};
  text-align: center;
`;

/**
 * CaseStudy2Team: Scaling with Intention
 * 
 * Layout: Split layout with strategy points on the left and timeline on the right
 * Content: Team growth timeline and organizational overview
 */
const CaseStudy2Team = () => {
  // Team points data
  const teamPoints = [
    'Built team gradually: CG artists → directors → producers → hybrid talent',
    'Inspired by VFX pipelines but adapted for design and marketing needs',
    'Grew into a versatile team across disciplines: motion, CG, VFX, UI'
  ];
  
  // Timeline data
  const timelineData = [
    {
      year: '2015',
      title: 'First CG Artists',
      description: 'Initial team of 3 generalists handling all aspects of CG production'
    },
    {
      year: '2017',
      title: 'Director & Producer',
      description: 'Added creative direction and production management as projects grew in scale'
    },
    {
      year: '2019',
      title: 'Specialized Disciplines',
      description: 'Team grew to include modeling, lighting, animation, and compositing specialists'
    },
    {
      year: '2021-22',
      title: 'Hybrid Talent Integration',
      description: 'Added live action expertise and cross-disciplinary talent for complex productions'
    }
  ];
  
  // Org data
  const orgData = [
    { title: 'CG Artists', count: '12', bgColor: 'rgba(255, 51, 102, 0.1)', borderColor: tokens.colors.accent.primary },
    { title: 'Directors', count: '3', bgColor: 'rgba(51, 102, 255, 0.1)', borderColor: tokens.colors.accent.secondary },
    { title: 'Producers', count: '4', bgColor: 'rgba(51, 204, 153, 0.1)', borderColor: tokens.colors.accent.tertiary },
    { title: 'Hybrid', count: '5', bgColor: 'rgba(255, 204, 51, 0.1)', borderColor: '#FFCC33' }
  ];

  return (
    <SlideContainer>
      <TeamLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <TeamTitle>Scaling with Intention: 2015–2022</TeamTitle>
        <TeamDescription>
          Strategic team development based on evolving needs and expanding capabilities.
        </TeamDescription>
        
        <TeamPoints>
          {teamPoints.map((point, index) => (
            <TeamPoint key={index}>
              <TeamMarker />
              <TeamText>{point}</TeamText>
            </TeamPoint>
          ))}
        </TeamPoints>
      </TeamLeft>
      
      <TeamRight>
        <TimelineContainer>
          <TimelineLine />
          
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineMarker />
              <TimelineYear>{item.year}</TimelineYear>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDescription>{item.description}</TimelineDescription>
            </TimelineItem>
          ))}
          
          <OrgPreview>
            {orgData.map((org, index) => (
              <OrgElement 
                key={index}
                $bgColor={org.bgColor}
                $borderColor={org.borderColor}
              >
                <OrgElementTitle>{org.title}</OrgElementTitle>
                <OrgElementCount>{org.count}</OrgElementCount>
              </OrgElement>
            ))}
          </OrgPreview>
        </TimelineContainer>
      </TeamRight>
    </SlideContainer>
  );
};

export default CaseStudy2Team; 