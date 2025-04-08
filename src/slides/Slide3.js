import React from 'react';
import { 
  StatsEyebrow, 
  StatsTitle, 
  StatsSubtitle,
  StatValue,
  StatLabel,
  StatContext
} from '../components/Typography';
import { 
  StatsLayout,
  StatsBgNumber,
  StatsContent,
  StatsHeader,
  StatsGrid,
  StatCard
} from '../components/SlideLayouts';

/**
 * Slide 3: Stats Card Layout
 * 
 * Layout: Dark gradient background with large background number
 * Content: Header with title/subtitle and 3 interactive stat cards
 */
const Slide3 = () => {
  // Data for the statistics
  const statsData = [
    {
      value: '25',
      label: 'Years in Computer Graphics',
      context: 'Working with visualization tools since 1999'
    },
    {
      value: '17',
      label: 'Years in CG Visualization',
      context: 'Creating visuals for product design and marketing'
    },
    {
      value: '12',
      label: 'Years of Leadership',
      context: 'Building teams and improving processes'
    }
  ];

  return (
    <StatsLayout>
      <StatsBgNumber>25</StatsBgNumber>
      <StatsContent>
        <StatsHeader>
          <StatsEyebrow>About Me</StatsEyebrow>
          <StatsTitle>25 Years in the Industry</StatsTitle>
          <StatsSubtitle>
            Problem-solving through visuals and technology to help product teams communicate better.
          </StatsSubtitle>
        </StatsHeader>
        
        <StatsGrid>
          {statsData.map((stat, index) => (
            <StatCard key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
              <StatContext>{stat.context}</StatContext>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsLayout>
  );
};

export default Slide3; 