import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Hybrid slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${tokens.colors.backgrounds.offWhite};
  display: flex;
  flex-direction: column;
`;

const HybridHeader = styled.div`
  padding: 6% 6% 3%;
`;

const HybridTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 2%;
  max-width: 90%;
`;

const HybridDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  max-width: 60%;
`;

const ProcessContainer = styled.div`
  display: flex;
  height: 70%;
  padding: 0 6% 6%;
`;

const ProcessStep = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1.5%;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 40%;
    right: 0;
    width: 1.5vw;
    height: 1.5vw;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23999999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(50%);
    z-index: 10;
  }
`;

const ProcessImageContainer = styled.div`
  flex-grow: 1;
  background-color: ${tokens.colors.neutrals.white};
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  margin-bottom: 1.5vw;
  box-shadow: ${tokens.shadows.default};
`;

const ProcessTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 0.5vw;
  text-align: center;
`;

const ProcessDescription = styled.p`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.darkGray};
  line-height: 1.5;
  text-align: center;
`;

/**
 * CaseStudy2Hybrid: Blending Worlds—CG Meets Live Action
 * 
 * Layout: Header with four-step process visualization
 * Content: Progression from live action to final hybrid output
 */
const CaseStudy2Hybrid = ({ onContentDrop }) => {
  // Process steps data
  const processSteps = [
    {
      id: 'live-action',
      title: 'Live Action Plate',
      description: 'On-set filming with careful planning for CG integration',
      placeholder: 'Drag live action plate image here'
    },
    {
      id: '3d-elements',
      title: '3D Elements',
      description: 'Creating computer-generated objects, effects, and environments',
      placeholder: 'Drag 3D elements image here'
    },
    {
      id: 'compositing',
      title: 'Compositing',
      description: 'Integrating CG elements with live footage',
      placeholder: 'Drag compositing process image here'
    },
    {
      id: 'final-output',
      title: 'Final Output',
      description: 'Seamless blend of real and digital elements',
      placeholder: 'Drag final output image here'
    }
  ];

  return (
    <SlideContainer>
      <HybridHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <HybridTitle>Blending Worlds—CG Meets Live Action</HybridTitle>
        <HybridDescription>
          Exploring the creative possibilities at the intersection of live action footage and computer-generated imagery.
        </HybridDescription>
      </HybridHeader>
      
      <ProcessContainer>
        {processSteps.map((step, index) => (
          <ProcessStep key={index}>
            <ProcessImageContainer>
              <ContentPlaceholder
                id={step.id}
                placeholderText={step.placeholder}
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="rgba(0, 0, 0, 0.05)"
                $borderRadius="8px"
                $width="100%"
                $height="100%"
                $padding="0"
              />
            </ProcessImageContainer>
            <ProcessTitle>{step.title}</ProcessTitle>
            <ProcessDescription>{step.description}</ProcessDescription>
          </ProcessStep>
        ))}
      </ProcessContainer>
    </SlideContainer>
  );
};

export default CaseStudy2Hybrid; 