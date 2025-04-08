import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Collaboration slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 55% 45%;
`;

const CollaborationLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${tokens.colors.neutrals.black};
`;

const CollaborationTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 5%;
  max-width: 90%;
`;

const CollaborationDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  margin-bottom: 5%;
  max-width: 90%;
`;

const CollaborationPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
  margin-top: 3%;
`;

const CollaborationPoint = styled.div`
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

const CollaborationRight = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComparisonContainer = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5%;
`;

const ComparisonItem = styled.div`
  height: 48%;
  background-color: ${tokens.colors.backgrounds.offWhite};
  border-radius: ${tokens.borders.radius.card};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

const ComparisonLabel = styled.div`
  position: absolute;
  top: 1vw;
  left: 1vw;
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 0.8vw;
  font-weight: ${tokens.typography.fontWeight.semibold};
  background-color: rgba(255, 51, 102, 0.9);
  color: white;
  padding: 0.3vw 0.6vw;
  border-radius: 3px;
  z-index: 2;
`;

/**
 * CaseStudy1Collaboration: Collaboration at the Source
 * 
 * Layout: Split layout with content on the left and visual demonstrations on the right
 * Content: Collaboration aspects with product design and engineering
 */
const CaseStudy1Collaboration = ({ onContentDrop }) => {
  // Collaboration points data
  const collaborationPoints = [
    'Direct partnership with product engineers for CAD accuracy',
    '1:1 digital representation of physical products',
    'Maintaining both visual and mechanical accuracy'
  ];

  // Comparison items data
  const comparisonItems = [
    {
      label: 'CAD',
      id1: 'collab-cad-1',
      id2: 'collab-cad-2',
      placeholder1: 'Drag CAD file image',
      placeholder2: 'Drag 3D model image'
    },
    {
      label: 'RENDER',
      id1: 'collab-render-1',
      id2: 'collab-render-2',
      placeholder1: 'Drag rendering process image',
      placeholder2: 'Drag final render image'
    }
  ];

  return (
    <SlideContainer>
      <CollaborationLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <CollaborationTitle>Collaboration at the Source</CollaborationTitle>
        <CollaborationDescription>
          Working directly with design and engineering teams to create authentic digital representations.
        </CollaborationDescription>
        
        <CollaborationPoints>
          {collaborationPoints.map((point, index) => (
            <CollaborationPoint key={index}>
              <PointMarker />
              <PointText>{point}</PointText>
            </CollaborationPoint>
          ))}
        </CollaborationPoints>
      </CollaborationLeft>
      
      <CollaborationRight>
        <ComparisonContainer>
          {comparisonItems.map((item, index) => (
            <ComparisonItem key={index}>
              <ComparisonLabel>{item.label}</ComparisonLabel>
              <ContentPlaceholder
                id={item.id1}
                placeholderText={item.placeholder1}
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="transparent"
                $borderRadius="0"
                $width="100%"
                $height="100%"
                $padding="0"
                $minHeight="0"
              />
              <ContentPlaceholder
                id={item.id2}
                placeholderText={item.placeholder2}
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="transparent"
                $borderRadius="0"
                $width="100%"
                $height="100%"
                $padding="0"
                $minHeight="0"
              />
            </ComparisonItem>
          ))}
        </ComparisonContainer>
      </CollaborationRight>
    </SlideContainer>
  );
};

export default CaseStudy1Collaboration; 