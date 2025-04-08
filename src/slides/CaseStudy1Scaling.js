import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Scaling slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${tokens.colors.neutrals.black};
  overflow: hidden;
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 6%;
  display: flex;
  flex-direction: column;
`;

const ScalingHeader = styled.div`
  margin-bottom: 4%;
`;

const ScalingTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 2%;
  max-width: 80%;
`;

const ScalingDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  max-width: 60%;
`;

const TimelineContainer = styled.div`
  flex: 1;
  margin-top: 2%;
  position: relative;
  display: flex;
  align-items: center;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
  transform: translateY(-50%);
`;

const TimelineMarker = styled.div`
  position: absolute;
  top: 50%;
  width: 1.5vw;
  height: 1.5vw;
  background-color: ${tokens.colors.accent.primary};
  border-radius: 50%;
  transform: translateY(-50%);
  
  &.marker-1 { left: 10%; }
  &.marker-2 { left: 35%; }
  &.marker-3 { left: 60%; }
  &.marker-4 { left: 85%; }
`;

const TimelineConnector = styled.div`
  position: absolute;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  
  &.connector-top {
    bottom: 50%;
    height: 5%;
  }
  
  &.connector-bottom {
    top: 50%;
    height: 5%;
  }
  
  &.connector-1 { left: 10%; }
  &.connector-2 { left: 35%; }
  &.connector-3 { left: 60%; }
  &.connector-4 { left: 85%; }
`;

const TimelineItem = styled.div`
  position: absolute;
  width: 20%;
  
  &.item-top {
    bottom: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  &.item-bottom {
    top: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  &.item-1 { left: 10%; }
  &.item-2 { left: 35%; }
  &.item-3 { left: 60%; }
  &.item-4 { left: 85%; }
`;

const TimelineDate = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.accent.primary};
  margin-bottom: 1vw;
`;

const TimelineContent = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  border-radius: ${tokens.borders.radius.card};
  padding: 1.5vw;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TimelineLabel = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 0.5vw;
`;

const TimelineText = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.darkGray};
  line-height: 1.5;
`;

/**
 * CaseStudy1Scaling: Scaling Under Constraints
 * 
 * Layout: Timeline visualization with alternating items
 * Content: Infrastructure and rendering scaling journey
 */
const CaseStudy1Scaling = () => {
  // Timeline data
  const timelineData = [
    {
      date: 'Q3 2012',
      label: 'Initial Setup',
      text: '5 workstations repurposed for overnight rendering',
      position: 'top',
      markerPosition: 1
    },
    {
      date: 'Q1 2013',
      label: 'First Expansion',
      text: '12 dedicated CPU render nodes across multiple circuits',
      position: 'bottom',
      markerPosition: 2
    },
    {
      date: 'Q4 2013',
      label: 'Process Optimization',
      text: 'Render settings and workflow improvements to maximize throughput',
      position: 'top',
      markerPosition: 3
    },
    {
      date: 'Q2 2014',
      label: 'Data Center Integration',
      text: '20+ nodes moved to dedicated data center facility',
      position: 'bottom',
      markerPosition: 4
    }
  ];

  return (
    <SlideContainer>
      <ScalingHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <ScalingTitle>Scaling Under Constraints</ScalingTitle>
        <ScalingDescription>
          Expanding CPU-based rendering capabilities while optimizing for maximum throughput.
        </ScalingDescription>
      </ScalingHeader>
      
      <TimelineContainer>
        <TimelineLine />
        
        {timelineData.map((item, index) => (
          <React.Fragment key={index}>
            <TimelineMarker className={`marker-${item.markerPosition}`} />
            <TimelineConnector 
              className={`connector-${item.position === 'top' ? 'top' : 'bottom'} connector-${item.markerPosition}`} 
            />
            <TimelineItem 
              className={`item-${item.position === 'top' ? 'top' : 'bottom'} item-${item.markerPosition}`}
            >
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineContent>
                <TimelineLabel>{item.label}</TimelineLabel>
                <TimelineText>{item.text}</TimelineText>
              </TimelineContent>
            </TimelineItem>
          </React.Fragment>
        ))}
      </TimelineContainer>
    </SlideContainer>
  );
};

export default CaseStudy1Scaling; 