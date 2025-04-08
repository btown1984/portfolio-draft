import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';
import ContentPlaceholder from '../components/ContentPlaceholder';

// Styled components for the Impact slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${tokens.colors.neutrals.black};
  overflow: hidden;
  background-color: ${tokens.colors.backgrounds.light};
  display: flex;
  flex-direction: column;
`;

const ImpactHeader = styled.div`
  padding: 6% 6% 3%;
`;

const ImpactTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 2%;
  max-width: 80%;
`;

const ImpactDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  max-width: 60%;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1vw;
  flex: 1;
  padding: 0 6% 6%;
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

const GalleryLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1vw;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: ${tokens.colors.neutrals.white};
  font-size: 0.9vw;
  z-index: 2;
  
  ${props => props.$isMain && `
    font-family: ${tokens.typography.fontFamily.serif};
    font-size: 1.2vw;
    font-weight: ${tokens.typography.fontWeight.semibold};
  `}
`;

/**
 * CaseStudy1Impact: Launching a Global Brand
 * 
 * Layout: Header with asymmetrical image gallery
 * Content: Global impact across markets and formats
 */
const CaseStudy1Impact = ({ onContentDrop }) => {
  // Gallery items data
  const galleryItems = [
    {
      label: 'Global launch event featuring consistent Surface visual language',
      id: 'impact-main',
      isMain: true
    },
    {
      label: 'European Market',
      id: 'impact-europe'
    },
    {
      label: 'Asian Market',
      id: 'impact-asia'
    },
    {
      label: 'North American Market',
      id: 'impact-na'
    },
    {
      label: 'Retail Environment',
      id: 'impact-retail'
    },
    {
      label: 'Digital Campaign',
      id: 'impact-digital'
    },
    {
      label: 'Print Materials',
      id: 'impact-print'
    }
  ];

  return (
    <SlideContainer>
      <ImpactHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <ImpactTitle>Launching a Global Brand</ImpactTitle>
        <ImpactDescription>
          Creating consistent visual identity across eight global markets while maintaining accelerated delivery timelines.
        </ImpactDescription>
      </ImpactHeader>
      
      <GalleryContainer>
        {galleryItems.map((item, index) => (
          <GalleryItem key={index} style={item.isMain ? { gridColumn: 'span 2', gridRow: 'span 2' } : {}}>
            <ContentPlaceholder
              id={item.id}
              placeholderText={`Drag ${item.label} image`}
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
            <GalleryLabel $isMain={item.isMain}>{item.label}</GalleryLabel>
          </GalleryItem>
        ))}
      </GalleryContainer>
    </SlideContainer>
  );
};

export default CaseStudy1Impact; 