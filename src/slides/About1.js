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
 * About1: Stats Card Layout
 * 
 * Layout: Dark gradient background with large background number
 * Content: Header with title/subtitle and 3 interactive stat cards
 */
const About1 = () => {
  // Data for the statistics
  const statsData = [
    {
      value: '25',
      label: 'Years of Loving CG',
      context: 'Started tinkering with 3D tools at 15 and never stopped.'
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
          <StatsTitle>25 Years at the Intersection of Art and Technology</StatsTitle>
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

export default About1; 