import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Evolution slide
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

const EvolutionHeader = styled.div`
  padding: 6% 6% 3%;
`;

const EvolutionTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 2%;
  max-width: 80%;
`;

const EvolutionDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  max-width: 60%;
`;

const ComparisonContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 6% 6%;
`;

const ComparisonColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1.5%;
`;

const ComparisonYear = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['2xl']};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 1vw;
  display: flex;
  align-items: center;
  
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin-left: 1vw;
  }
`;

const ComparisonImageContainer = styled.div`
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  margin-bottom: 1.5vw;
  position: relative;
`;

const ComparisonCaption = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  text-align: center;
`;

/**
 * CaseStudy1Evolution: Visual Quality Evolution: 2012-2014
 * 
 * Layout: Header with three-column comparison
 * Content: Evolution of visual quality over Surface generations
 */
const CaseStudy1Evolution = ({ onContentDrop }) => {
  // Comparison data
  const comparisonData = [
    {
      year: 'Surface (2012)',
      caption: 'Initial product visualization with fundamental lighting and materials',
      id: 'evolution-2012'
    },
    {
      year: 'Surface Pro (2013)',
      caption: 'Improved material definition and environmental interaction',
      id: 'evolution-2013'
    },
    {
      year: 'Surface Pro 3 (2014)',
      caption: 'Advanced lighting, materials, and cinematic composition',
      id: 'evolution-2014'
    }
  ];

  return (
    <SlideContainer>
      <EvolutionHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <EvolutionTitle>Visual Quality Evolution: 2012-2014</EvolutionTitle>
        <EvolutionDescription>
          Progressive improvement in visual fidelity and storytelling across Surface product generations.
        </EvolutionDescription>
      </EvolutionHeader>
      
      <ComparisonContainer>
        {comparisonData.map((item, index) => (
          <ComparisonColumn key={index}>
            <ComparisonYear>{item.year}</ComparisonYear>
            <ComparisonImageContainer>
              <ContentPlaceholder
                id={item.id}
                placeholderText={`Drag ${item.year} image`}
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
            </ComparisonImageContainer>
            <ComparisonCaption>{item.caption}</ComparisonCaption>
          </ComparisonColumn>
        ))}
      </ComparisonContainer>
    </SlideContainer>
  );
};

export default CaseStudy1Evolution; 