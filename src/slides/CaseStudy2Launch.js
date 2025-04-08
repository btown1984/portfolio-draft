import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Launch slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${tokens.colors.backgrounds.dark};
  display: flex;
  flex-direction: column;
`;

const LaunchHeader = styled.div`
  padding: 6% 6% 3%;
`;

const LaunchTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 2%;
  max-width: 90%;
`;

const LaunchDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  max-width: 60%;
`;

const LaunchGridContainer = styled.div`
  flex-grow: 1;
  padding: 0 6% 6%;
  overflow: hidden;
`;

const LaunchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1vw;
  height: 100%;
`;

const LaunchItem = styled.div`
  position: relative;
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  box-shadow: ${tokens.shadows.default};
  
  &:hover .launch-overlay {
    opacity: 1;
  }
  
  &:hover .launch-image {
    transform: scale(1.05);
  }
`;

const LaunchOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1vw;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  transition: opacity 0.3s ease;
  z-index: 2;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

const LaunchProduct = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 0.3vw;
`;

const LaunchYear = styled.div`
  font-size: ${tokens.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.7);
`;

const LaunchStyle = styled.div`
  position: absolute;
  top: 0.8vw;
  right: 0.8vw;
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
  text-transform: uppercase;
  color: white;
  background-color: rgba(255, 51, 102, 0.8);
  padding: 0.3vw 0.6vw;
  border-radius: 3px;
  z-index: 2;
`;

/**
 * CaseStudy2Launch: The Visual Backbone of Every Major Launch Film
 * 
 * Layout: Header with gallery grid
 * Content: Collection of launch film projects
 */
const CaseStudy2Launch = ({ onContentDrop }) => {
  // Launch items data
  const launchItems = [
    {
      id: 'launch-1',
      product: 'Product Launch 1',
      year: '2015',
      style: 'CG'
    },
    {
      id: 'launch-2',
      product: 'Product Launch 2',
      year: '2016',
      style: 'CG'
    },
    {
      id: 'launch-3',
      product: 'Product Launch 3',
      year: '2017',
      style: 'CG'
    },
    {
      id: 'launch-4',
      product: 'Product Launch 4',
      year: '2018',
      style: 'HYBRID'
    },
    {
      id: 'launch-5',
      product: 'Product Launch 5',
      year: '2019',
      style: 'HYBRID'
    },
    {
      id: 'launch-6',
      product: 'Product Launch 6',
      year: '2020',
      style: 'HYBRID'
    },
    {
      id: 'launch-7',
      product: 'Product Launch 7',
      year: '2021',
      style: 'HYBRID'
    },
    {
      id: 'launch-8',
      product: 'Product Launch 8',
      year: '2022',
      style: 'HYBRID'
    },
  ];

  return (
    <SlideContainer>
      <LaunchHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <LaunchTitle>The Visual Backbone of Every Major Launch Film</LaunchTitle>
        <LaunchDescription>
          A decade of crafting narrative-driven product films that shaped visual storytelling language.
        </LaunchDescription>
      </LaunchHeader>
      
      <LaunchGridContainer>
        <LaunchGrid>
          {launchItems.map((item, index) => (
            <LaunchItem key={index}>
              <ContentPlaceholder
                id={item.id}
                placeholderText={`Drag ${item.product} image`}
                isDropZone={true}
                onDrop={onContentDrop}
                $backgroundColor="rgba(255, 255, 255, 0.05)"
                $borderRadius="6px"
                $width="100%"
                $height="100%"
                $padding="0"
                className="launch-image"
              />
              <LaunchOverlay className="launch-overlay">
                <LaunchProduct>{item.product}</LaunchProduct>
                <LaunchYear>{item.year}</LaunchYear>
              </LaunchOverlay>
              <LaunchStyle>{item.style}</LaunchStyle>
            </LaunchItem>
          ))}
        </LaunchGrid>
      </LaunchGridContainer>
    </SlideContainer>
  );
};

export default CaseStudy2Launch; 