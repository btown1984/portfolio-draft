import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Complexities slide
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

const ComplexitiesHeader = styled.div`
  margin-bottom: 5%;
`;

const ComplexitiesTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 2%;
  max-width: 80%;
`;

const ComplexitiesDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  max-width: 60%;
`;

const ComplexitiesDiagram = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiagramCenter = styled.div`
  width: 12vw;
  height: 12vw;
  background-color: ${tokens.colors.backgrounds.dark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const DiagramCenterText = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  text-align: center;
  max-width: 70%;
`;

const DiagramItem = styled.div`
  position: absolute;
  width: 9vw;
  height: 9vw;
  background-color: ${tokens.colors.backgrounds.offWhite};
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1vw;
  z-index: 1;
  
  &:nth-child(2) {
    top: 10%;
    left: 15%;
  }
  
  &:nth-child(3) {
    top: 10%;
    right: 15%;
  }
  
  &:nth-child(4) {
    bottom: 10%;
    left: 25%;
  }
  
  &:nth-child(5) {
    bottom: 10%;
    right: 25%;
  }
`;

const DiagramItemIcon = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  background-color: rgba(255, 51, 102, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8vw;
`;

const DiagramItemIconInner = styled.div`
  width: 1.2vw;
  height: 1.2vw;
  background-color: ${tokens.colors.accent.primary};
  border-radius: 50%;
  opacity: 0.8;
`;

const DiagramItemText = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  text-align: center;
`;

const DiagramConnector = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 0;
  
  &.connector-1 {
    width: 15vw;
    height: 1px;
    transform: rotate(-30deg);
    top: 30%;
    left: 25%;
  }
  
  &.connector-2 {
    width: 15vw;
    height: 1px;
    transform: rotate(30deg);
    top: 30%;
    right: 25%;
  }
  
  &.connector-3 {
    width: 15vw;
    height: 1px;
    transform: rotate(30deg);
    bottom: 30%;
    left: 25%;
  }
  
  &.connector-4 {
    width: 15vw;
    height: 1px;
    transform: rotate(-30deg);
    bottom: 30%;
    right: 25%;
  }
`;

/**
 * CaseStudy1Complexities: Under the Hood: The Invisible Complexities
 * 
 * Layout: Information graphic with central node and connected items
 * Content: Technical challenges visualization
 */
const CaseStudy1Complexities = () => {
  // Diagram items data
  const diagramItems = [
    {
      text: 'CAD Data Management',
    },
    {
      text: '8 Global Markets',
    },
    {
      text: 'Render Time Constraints',
    },
    {
      text: 'Photorealistic Quality',
    }
  ];

  return (
    <SlideContainer>
      <ComplexitiesHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <ComplexitiesTitle>Under the Hood: The Invisible Complexities</ComplexitiesTitle>
        <ComplexitiesDescription>
          Managing multiple technical challenges while maintaining production schedules.
        </ComplexitiesDescription>
      </ComplexitiesHeader>
      
      <ComplexitiesDiagram>
        <DiagramConnector className="connector-1" />
        <DiagramConnector className="connector-2" />
        <DiagramConnector className="connector-3" />
        <DiagramConnector className="connector-4" />
        
        <DiagramCenter>
          <DiagramCenterText>Surface Visual Production</DiagramCenterText>
        </DiagramCenter>
        
        {diagramItems.map((item, index) => (
          <DiagramItem key={index}>
            <DiagramItemIcon>
              <DiagramItemIconInner />
            </DiagramItemIcon>
            <DiagramItemText>{item.text}</DiagramItemText>
          </DiagramItem>
        ))}
      </ComplexitiesDiagram>
    </SlideContainer>
  );
};

export default CaseStudy1Complexities; 