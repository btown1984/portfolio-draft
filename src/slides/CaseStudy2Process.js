import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Process Power slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 55% 45%;
`;

const ProcessPowerLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProcessPowerTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 5%;
  max-width: 90%;
`;

const ProcessPowerDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  margin-bottom: 5%;
  max-width: 90%;
`;

const PowerEquation = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3vw;
  padding: 2vw;
  background-color: ${tokens.colors.neutrals.white};
  border-radius: ${tokens.borders.radius.card};
  box-shadow: ${tokens.shadows.default};
`;

const EquationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const EquationIcon = styled.div`
  width: 4vw;
  height: 4vw;
  background-color: rgba(255, 51, 102, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vw;
`;

const EquationIconInner = styled.div`
  width: 2vw;
  height: 2vw;
  background-color: ${tokens.colors.accent.primary};
  border-radius: 50%;
  opacity: 0.8;
`;

const EquationText = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  text-align: center;
`;

const EquationOperator = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 2vw;
  color: ${tokens.colors.neutrals.gray};
  margin: 0 1vw;
`;

const ProcessPowerRight = styled.div`
  background-color: ${tokens.colors.backgrounds.dark};
  position: relative;
  overflow: hidden;
`;

const MoodboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1vw;
  padding: 8%;
`;

const MoodboardItem = styled.div`
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  position: relative;
  box-shadow: ${tokens.shadows.default};
`;

/**
 * CaseStudy2Process: Process = Power
 * 
 * Layout: Split layout with equation on the left and visual moodboard on the right
 * Content: Visual representation of how process creates creative power
 */
const CaseStudy2Process = ({ onContentDrop }) => {
  // Equation items data
  const equationItems = [
    { text: 'Clear Process' },
    { text: 'Skilled Team' },
    { text: 'Creative Power' }
  ];
  
  // Moodboard items data
  const moodboardItems = [
    { id: 'moodboard-1' },
    { id: 'moodboard-2' },
    { id: 'moodboard-3' },
    { id: 'moodboard-4' }
  ];

  return (
    <SlideContainer>
      <ProcessPowerLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <ProcessPowerTitle>Process = Power</ProcessPowerTitle>
        <ProcessPowerDescription>
          When creative teams have clear structure and reliable workflows, they're free to take bigger risks and push creative boundaries.
        </ProcessPowerDescription>
        
        <PowerEquation>
          <EquationItem>
            <EquationIcon>
              <EquationIconInner />
            </EquationIcon>
            <EquationText>{equationItems[0].text}</EquationText>
          </EquationItem>
          
          <EquationOperator>+</EquationOperator>
          
          <EquationItem>
            <EquationIcon>
              <EquationIconInner />
            </EquationIcon>
            <EquationText>{equationItems[1].text}</EquationText>
          </EquationItem>
          
          <EquationOperator>=</EquationOperator>
          
          <EquationItem>
            <EquationIcon>
              <EquationIconInner />
            </EquationIcon>
            <EquationText>{equationItems[2].text}</EquationText>
          </EquationItem>
        </PowerEquation>
      </ProcessPowerLeft>
      
      <ProcessPowerRight>
        <MoodboardContainer>
          {moodboardItems.map((item, index) => (
            <MoodboardItem key={index}>
              <ContentPlaceholder
                id={item.id}
                placeholderText={`Drag moodboard image ${index + 1}`}
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="rgba(255, 255, 255, 0.05)"
                $borderRadius="6px"
                $width="100%"
                $height="100%"
                $padding="0"
              />
            </MoodboardItem>
          ))}
        </MoodboardContainer>
      </ProcessPowerRight>
    </SlideContainer>
  );
};

export default CaseStudy2Process; 