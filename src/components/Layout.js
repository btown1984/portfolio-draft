import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';

// Base slide container
export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.$backgroundColor || tokens.colors.backgrounds.light};
`;

// Two-column grid layout
export const TwoColumnGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${props => props.$columns || '1fr 1fr'};
  grid-gap: ${props => props.$gap || '0'};
  overflow: hidden;
`;

// Column with padding
export const Column = styled.div`
  padding: ${props => props.$padding || tokens.spacing.editorial.agendaSlide.columnPadding};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$justifyContent || 'center'};
  align-items: ${props => props.$alignItems || 'flex-start'};
  background-color: ${props => props.$backgroundColor || 'transparent'};
  color: ${props => props.$color || 'inherit'};
`;

// Content list
export const ContentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

// List item with bottom border
export const ListItem = styled.li`
  padding-bottom: ${props => props.$paddingBottom || tokens.spacing.editorial.agendaSlide.itemPaddingBottom};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.agendaSlide.itemMarginBottom};
  border-bottom: ${props => props.$borderBottom || `${tokens.borders.width.thin} solid ${tokens.borders.color.agendaItem}`};
  display: flex;
  align-items: ${props => props.$alignItems || 'flex-start'};

  &:last-child {
    border-bottom: ${props => props.$lastChildBorderBottom || 'none'};
    margin-bottom: ${props => props.$lastChildMarginBottom || '0'};
    padding-bottom: ${props => props.$lastChildPaddingBottom || '0'};
  }
`;

// Item prefix (like a number)
export const ItemPrefix = styled.div`
  flex-shrink: 0;
  width: ${props => props.$width || '15%'};
`;

// Item content
export const ItemContent = styled.div`
  flex-grow: 1;
`;

// Gradient background for slides
export const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.$gradient || tokens.colors.gradients.darkBackground};
  z-index: ${props => props.$zIndex || 0};
  opacity: ${props => props.$opacity || 1};
`;

export default {
  SlideContainer,
  TwoColumnGrid,
  Column,
  ContentList,
  ListItem,
  ItemPrefix,
  ItemContent,
  GradientBackground
}; 