import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Summary slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SummaryLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${tokens.colors.neutrals.black};
`;

const SummaryTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 5%;
  max-width: 90%;
`;

const SummaryQuote = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['2xl']};
  line-height: 1.4;
  font-weight: ${tokens.typography.fontWeight.light};
  font-style: italic;
  color: ${tokens.colors.neutrals.darkGray};
  position: relative;
  padding-left: 2vw;
  margin-top: 3vw;
  
  &::before {
    content: '"';
    position: absolute;
    left: 0;
    top: -0.5vw;
    font-size: 4vw;
    color: ${tokens.colors.accent.primary};
    font-style: normal;
  }
`;

const SummaryRight = styled.div`
  position: relative;
  overflow: hidden;
`;

const SummaryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  z-index: 2;
`;

const SummaryResults = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SummaryStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SummaryValue = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 2.5vw;
  font-weight: ${tokens.typography.fontWeight.bold};
  color: ${tokens.colors.neutrals.white};
  line-height: 1;
`;

const SummaryLabel = styled.div`
  font-size: 0.9vw;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 0.5vw;
`;

/**
 * CaseStudy1Summary: Clearer Process, Better Stories, Stronger Products
 * 
 * Layout: Split layout with quote on the left and image with statistics on the right
 * Content: Final thoughts and project statistics
 */
const CaseStudy1Summary = ({ onContentDrop }) => {
  // Summary statistics data
  const summaryStats = [
    {
      value: '300+',
      label: 'Product Images'
    },
    {
      value: '8',
      label: 'Global Markets'
    },
    {
      value: '70%',
      label: 'Cost Reduction'
    },
    {
      value: '12',
      label: 'Team Members'
    }
  ];

  return (
    <SlideContainer>
      <SummaryLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <SummaryTitle>Clearer Process, Better Stories, Stronger Products</SummaryTitle>
        <SummaryQuote>
          By making technical complexity invisible, we enabled teams to focus entirely on consumer experience.
        </SummaryQuote>
      </SummaryLeft>
      
      <SummaryRight>
        <ContentPlaceholder
          id="summary-image"
          placeholderText="Drag summary image here"
          isDropZone={true}
          onDrop={onContentDrop}
          $backgroundColor={tokens.colors.backgrounds.dark}
          $borderRadius="0"
          $width="100%"
          $height="100%"
          $padding="0"
          $minHeight="0"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
        
        <SummaryOverlay>
          <SummaryResults>
            {summaryStats.map((stat, index) => (
              <SummaryStat key={index}>
                <SummaryValue>{stat.value}</SummaryValue>
                <SummaryLabel>{stat.label}</SummaryLabel>
              </SummaryStat>
            ))}
          </SummaryResults>
        </SummaryOverlay>
      </SummaryRight>
    </SlideContainer>
  );
};

export default CaseStudy1Summary; 