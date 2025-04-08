import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { TwoColumnGrid, Column } from './Layout';

/**
 * Common slide layout patterns for the presentation
 * These components compose the existing Layout components
 * with specific configurations for different slide types.
 */

// Title Slide Layout (Slide1 layout)
export const TitleSlideLayout = styled(TwoColumnGrid)`
  background-color: ${tokens.colors.backgrounds.dark};
  color: ${tokens.colors.neutrals.white};
  grid-template-columns: ${tokens.layout.grid.titleSlide};
`;

export const TitleColumn = styled(Column)`
  z-index: 2;
  padding: ${tokens.layout.padding.titleSlide};
`;

export const MediaColumn = styled(Column)`
  position: relative;
  overflow: hidden;
  padding: 0;
`;

// Agenda Slide Layout (Slide2 layout)
export const AgendaSlideLayout = ({ children, ...props }) => {
  // Split children into left and right content
  const leftContent = React.Children.toArray(children)[0];
  const rightContent = React.Children.toArray(children)[1];
  
  return (
    <TwoColumnGrid {...props}>
      <Column $backgroundColor={tokens.colors.backgrounds.offWhite}>
        {leftContent}
      </Column>
      <Column 
        $color={tokens.colors.neutrals.white}
        $padding="10% 10% 10% 8%"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          background: tokens.colors.gradients.darkBackground,
          zIndex: -1 
        }} />
        {rightContent}
      </Column>
    </TwoColumnGrid>
  );
};

// Content and Media Split Layout
export const ContentMediaSplitLayout = ({ contentPosition = 'left', children, ...props }) => {
  // Split children into content and media
  const contentElement = React.Children.toArray(children)[0];
  const mediaElement = React.Children.toArray(children)[1];
  
  return (
    <TwoColumnGrid {...props}>
      {contentPosition === 'left' ? (
        <>
          <Column>{contentElement}</Column>
          <Column $padding="0">{mediaElement}</Column>
        </>
      ) : (
        <>
          <Column $padding="0">{mediaElement}</Column>
          <Column>{contentElement}</Column>
        </>
      )}
    </TwoColumnGrid>
  );
};

// Full-Width Content Layout
export const FullWidthLayout = styled(Column)`
  width: 100%;
  height: 100%;
  padding: 10%;
`;

// Stats Slide Layout (Slide3 layout)
export const StatsLayout = styled.div`
  width: 100%;
  height: 100%;
  background: ${tokens.colors.gradients.darkBackground};
  padding: ${tokens.spacing.editorial.statsSlide.padding};
  color: ${tokens.colors.neutrals.white};
  position: relative;
  overflow: hidden;
`;

export const StatsBgNumber = styled.div`
  position: absolute;
  right: -5%;
  bottom: -5%;
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['stats-bg-number']};
  font-weight: ${tokens.typography.fontWeight.bold};
  line-height: 0.8;
  color: rgba(255, 255, 255, ${tokens.effects.opacity.ultraSubtle});
  z-index: 1;
`;

export const StatsContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 3%;
`;

export const StatsHeader = styled.div`
  margin-bottom: ${tokens.spacing.editorial.statsSlide.headerBottom};
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.spacing.editorial.statsSlide.cardGap};
  margin-top: ${tokens.spacing.editorial.statsSlide.gridMarginTop};
`;

export const StatCard = styled.div`
  background-color: ${tokens.colors.cards.acrylic.background};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: ${tokens.borders.radius.card};
  border: 1px solid ${tokens.colors.cards.acrylic.border};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0px ${tokens.colors.cards.acrylic.highlight};
  padding: ${tokens.spacing.editorial.statsSlide.cardPadding};
  transition: transform ${tokens.animation.duration.normal} ${tokens.animation.easing.easeOut}, 
              background-color ${tokens.animation.duration.normal} ${tokens.animation.easing.easeOut},
              box-shadow ${tokens.animation.duration.normal} ${tokens.animation.easing.easeOut};

  &:hover {
    transform: ${tokens.animation.transform.cardHover};
    background-color: ${tokens.colors.cards.darkHover};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0px ${tokens.colors.cards.acrylic.highlight};
  }
`;

export default {
  TitleSlideLayout,
  TitleColumn,
  MediaColumn,
  AgendaSlideLayout,
  ContentMediaSplitLayout,
  FullWidthLayout,
  StatsLayout,
  StatsBgNumber,
  StatsContent,
  StatsHeader,
  StatsGrid,
  StatCard
}; 