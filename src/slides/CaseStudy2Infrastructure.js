import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Infrastructure slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${tokens.colors.backgrounds.offWhite};
`;

const RenderHeader = styled.div`
  padding: 6% 6% 3%;
`;

const RenderTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 2%;
  max-width: 90%;
`;

const RenderDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  max-width: 60%;
`;

const PhasesContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 0 6% 6%;
`;

const Phase = styled.div`
  flex: 1;
  position: relative;
  padding: 0 1.5%;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 90%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const PhaseNumber = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.accent.primary};
  margin-bottom: 1vw;
  display: flex;
  align-items: center;
  
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    margin-left: 1vw;
  }
`;

const PhaseTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['2xl']};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 1vw;
`;

const PhaseIcon = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: rgba(255, 51, 102, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vw;
`;

const PhaseIconInner = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: ${tokens.colors.accent.primary};
  border-radius: 50%;
  opacity: 0.8;
`;

const PhaseStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  margin-bottom: 1.5vw;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
`;

const StatLabel = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.gray};
  width: 40%;
`;

const StatValue = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
`;

const PhaseDescription = styled.p`
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.darkGray};
  line-height: 1.5;
`;

const PhaseHighlight = styled.div`
  margin-top: 1.5vw;
  background-color: ${tokens.colors.neutrals.white};
  border-radius: ${tokens.borders.radius.card};
  padding: 1vw;
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.lg};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  text-align: center;
  box-shadow: ${tokens.shadows.sm};
  
  .highlight-number {
    color: ${tokens.colors.accent.primary};
  }
`;

/**
 * CaseStudy2Infrastructure: Scaling to Keep Up with Ambition
 * 
 * Layout: Header with multi-column phases
 * Content: Three-phase infrastructure evolution with stats and highlights
 */
const CaseStudy2Infrastructure = () => {
  // Phases data
  const phasesData = [
    {
      number: 'Phase 1',
      title: 'CPU Render Farm',
      stats: [
        { label: 'Servers:', value: '8 → 22' },
        { label: 'Period:', value: '2015-2018' }
      ],
      description: 'Initial infrastructure built on traditional CPU rendering, scaled by adding more machines to handle increasing workloads.',
      highlight: 'Established foundation'
    },
    {
      number: 'Phase 2',
      title: 'GPU Acceleration',
      stats: [
        { label: 'Performance:', value: '5x increase' },
        { label: 'Period:', value: '2018-2020' }
      ],
      description: 'Transition to GPU-accelerated rendering enabled more complex scenes and faster turnaround for iterative design.',
      highlight: 'Faster iterations'
    },
    {
      number: 'Phase 3',
      title: 'Cloud Pipeline',
      stats: [
        { label: 'Capacity:', value: 'Unlimited' },
        { label: 'Period:', value: '2020-2022' }
      ],
      description: 'Cloud-based infrastructure with dynamic scaling, globally distributed teams, and integrated asset management.',
      highlight: 'Unlimited scale'
    }
  ];

  return (
    <SlideContainer>
      <RenderHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <RenderTitle>Scaling to Keep Up with Ambition</RenderTitle>
        <RenderDescription>
          Three-phase infrastructure evolution to support increasingly ambitious creative vision.
        </RenderDescription>
      </RenderHeader>
      
      <PhasesContainer>
        {phasesData.map((phase, index) => (
          <Phase key={index}>
            <PhaseNumber>{phase.number}</PhaseNumber>
            <PhaseTitle>{phase.title}</PhaseTitle>
            <PhaseIcon>
              <PhaseIconInner />
            </PhaseIcon>
            <PhaseStats>
              {phase.stats.map((stat, statIndex) => (
                <StatItem key={statIndex}>
                  <StatLabel>{stat.label}</StatLabel>
                  <StatValue>{stat.value}</StatValue>
                </StatItem>
              ))}
            </PhaseStats>
            <PhaseDescription>{phase.description}</PhaseDescription>
            <PhaseHighlight>
              {phase.highlight}
            </PhaseHighlight>
          </Phase>
        ))}
      </PhasesContainer>
    </SlideContainer>
  );
};

export default CaseStudy2Infrastructure; 