import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';

// Editorial Typography Components
export const EditorialSubtitle = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['title-subtitle']};
  font-weight: ${tokens.typography.fontWeight.editorial.subtitle};
  letter-spacing: ${tokens.typography.letterSpacing.editorial.titleSubtitle};
  text-transform: uppercase;
  opacity: ${tokens.effects.opacity.high};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.titleSlide.subtitleBottom};
  color: ${props => props.$color || tokens.colors.accent.primary};
`;

export const EditorialTitle = styled.h1`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['title-main']};
  line-height: ${tokens.typography.lineHeight.editorial.titleMain};
  font-weight: ${tokens.typography.fontWeight.semibold};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.titleSlide.titleBottom};
  letter-spacing: ${tokens.typography.letterSpacing.editorial.titleMain};
  color: ${props => props.$color || tokens.colors.neutrals.white};
`;

export const AuthorRole = styled.div`
  font-size: ${tokens.typography.fontSize['author-role']};
  opacity: ${tokens.effects.opacity.subtle};
  margin-top: ${props => props.$marginTop || tokens.spacing.editorial.titleSlide.authorRoleTop};
  color: ${props => props.$color || tokens.colors.neutrals.white};
`;

// Agenda Slide Typography Components
export const Eyebrow = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['agenda-eyebrow']};
  font-weight: ${tokens.typography.fontWeight.editorial.agendaEyebrow};
  text-transform: uppercase;
  letter-spacing: ${tokens.typography.letterSpacing.editorial.agendaEyebrow};
  color: ${props => props.$color || tokens.colors.neutrals.gray};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.agendaSlide.eyebrowBottom};
`;

export const SectionTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['agenda-title']};
  line-height: ${tokens.typography.lineHeight.editorial.agendaTitle};
  font-weight: ${tokens.typography.fontWeight.editorial.agendaTitle};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.agendaSlide.titleBottom};
  color: ${props => props.$color || tokens.colors.neutrals.black};
`;

export const BodyText = styled.p`
  font-family: ${tokens.typography.fontFamily.sansSerif};
  font-size: ${tokens.typography.fontSize['agenda-description']};
  line-height: ${tokens.typography.lineHeight.editorial.agendaDescription};
  color: ${props => props.$color || tokens.colors.neutrals.darkGray};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.agendaSlide.descriptionBottom};
  max-width: ${props => props.$maxWidth || '90%'};
`;

export const NumberedItem = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['agenda-number']};
  font-weight: ${tokens.typography.fontWeight.editorial.agendaNumber};
  line-height: ${tokens.typography.lineHeight.editorial.agendaNumber};
  color: ${props => props.$color || tokens.colors.accent.primary};
  opacity: ${tokens.effects.opacity.high};
`;

export const ItemTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['agenda-item-title']};
  font-weight: ${tokens.typography.fontWeight.editorial.agendaItemTitle};
  color: ${props => props.$color || tokens.colors.neutrals.white};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.agendaSlide.itemTitleBottom};
  margin-top: 0;
`;

export const ItemDescription = styled.p`
  font-family: ${tokens.typography.fontFamily.sansSerif};
  font-size: ${tokens.typography.fontSize['agenda-item-description']};
  line-height: ${tokens.typography.lineHeight.editorial.agendaItemDescription};
  color: ${props => props.$color || tokens.colors.neutrals.whiteTransparent['70']};
  margin: 0;
`;

// Stats Slide Typography Components
export const StatsEyebrow = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['stats-eyebrow']};
  font-weight: ${tokens.typography.fontWeight.editorial.statsEyebrow};
  text-transform: uppercase;
  letter-spacing: ${tokens.typography.letterSpacing.editorial.agendaEyebrow};
  color: ${props => props.$color || tokens.colors.accent.primary};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.statsSlide.eyebrowBottom};
`;

export const StatsTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['stats-title']};
  line-height: ${tokens.typography.lineHeight.editorial.statsTitle};
  font-weight: ${tokens.typography.fontWeight.editorial.statsTitle};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.statsSlide.titleBottom};
  color: ${props => props.$color || tokens.colors.neutrals.white};
  max-width: ${props => props.$maxWidth || '70%'};
`;

export const StatsSubtitle = styled.p`
  font-family: ${tokens.typography.fontFamily.sansSerif};
  font-size: ${tokens.typography.fontSize['stats-subtitle']};
  line-height: ${tokens.typography.lineHeight.editorial.statsSubtitle};
  color: ${props => props.$color || tokens.colors.neutrals.whiteTransparent['70']};
  margin-top: ${props => props.$marginTop || tokens.spacing.editorial.statsSlide.subtitleTop};
  max-width: ${props => props.$maxWidth || '60%'};
`;

export const StatValue = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['stat-value']};
  font-weight: ${tokens.typography.fontWeight.editorial.statValue};
  line-height: ${tokens.typography.lineHeight.editorial.statValue};
  color: ${props => props.$color || tokens.colors.accent.primary};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.statsSlide.statValueBottom};
`;

export const StatLabel = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['stat-label']};
  font-weight: ${tokens.typography.fontWeight.editorial.statLabel};
  line-height: ${tokens.typography.lineHeight.editorial.statLabel};
  color: ${props => props.$color || tokens.colors.neutrals.white};
  margin-bottom: ${props => props.$marginBottom || tokens.spacing.editorial.statsSlide.statLabelBottom};
`;

export const StatContext = styled.div`
  font-family: ${tokens.typography.fontFamily.sansSerif};
  font-size: ${tokens.typography.fontSize['stat-context']};
  line-height: ${tokens.typography.lineHeight.editorial.statContext};
  color: ${props => props.$color || tokens.colors.neutrals.whiteTransparent['70']};
`;

// Default export for convenience
export default {
  EditorialSubtitle,
  EditorialTitle,
  AuthorRole,
  Eyebrow,
  SectionTitle,
  BodyText,
  NumberedItem,
  ItemTitle,
  ItemDescription,
  StatsEyebrow,
  StatsTitle,
  StatsSubtitle,
  StatValue,
  StatLabel,
  StatContext
}; 