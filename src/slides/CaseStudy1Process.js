import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Process slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${tokens.colors.neutrals.white};
  overflow: hidden;
  background-color: ${tokens.colors.backgrounds.dark};
  display: flex;
  flex-direction: column;
`;

const ProcessHeader = styled.div`
  padding: 6% 6% 3%;
`;

const ProcessTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 2%;
  max-width: 80%;
`;

const ProcessDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  max-width: 60%;
`;

const ProcessStepGrid = styled.div`
  display: flex;
  flex: 1;
  padding: 0 6% 6%;
`;

const ProcessStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 1.5%;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 15%;
    right: 0;
    width: 1px;
    height: 70%;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ProcessNumber = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 2.5vw;
  font-weight: ${tokens.typography.fontWeight.bold};
  color: ${tokens.colors.accent.primary};
  opacity: 0.8;
  margin-bottom: 1.5vw;
`;

const ProcessStepTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 1.5vw;
`;

const ProcessImageContainer = styled.div`
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  margin-bottom: 1.5vw;
  position: relative;
`;

const ProcessStepDescription = styled.p`
  font-size: ${tokens.typography.fontSize.lg};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

/**
 * CaseStudy1Process: Building the Digital Product
 * 
 * Layout: Header with four-column process steps
 * Content: Four-step 3D asset creation process
 */
const CaseStudy1Process = ({ onContentDrop }) => {
  // Process steps data
  const processSteps = [
    {
      number: '01',
      title: 'Wireframe',
      description: 'Precise geometry built from engineering CAD data',
      id: 'process-wireframe'
    },
    {
      number: '02',
      title: 'Rigging',
      description: 'Creating movement systems for dynamic product features',
      id: 'process-rigging'
    },
    {
      number: '03',
      title: 'Materials',
      description: 'Developing physically accurate surface properties',
      id: 'process-materials'
    },
    {
      number: '04',
      title: 'Lighting',
      description: 'Studio-quality lighting for photorealistic renders',
      id: 'process-lighting'
    }
  ];

  return (
    <SlideContainer>
      <ProcessHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <ProcessTitle>Building the Digital Product</ProcessTitle>
        <ProcessDescription>
          Creating authentic 3D assets through meticulous attention to materials, lighting, and movement.
        </ProcessDescription>
      </ProcessHeader>
      
      <ProcessStepGrid>
        {processSteps.map((step, index) => (
          <ProcessStep key={index}>
            <ProcessNumber>{step.number}</ProcessNumber>
            <ProcessStepTitle>{step.title}</ProcessStepTitle>
            <ProcessImageContainer>
              <ContentPlaceholder
                id={step.id}
                placeholderText={`Drag ${step.title.toLowerCase()} image`}
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="transparent"
                $borderRadius="0"
                $width="100%"
                $height="100%"
                $padding="0"
                $minHeight="0"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </ProcessImageContainer>
            <ProcessStepDescription>{step.description}</ProcessStepDescription>
          </ProcessStep>
        ))}
      </ProcessStepGrid>
    </SlideContainer>
  );
};

export default CaseStudy1Process; 