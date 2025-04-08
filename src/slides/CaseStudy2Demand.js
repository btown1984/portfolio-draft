import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Demand slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 6%;
  background-color: ${tokens.colors.backgrounds.offWhite};
`;

const DemandHeader = styled.div`
  margin-bottom: 4%;
`;

const DemandTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 2%;
  max-width: 90%;
`;

const DemandDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  max-width: 60%;
`;

const DemandContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 3%;
  height: 70%;
  margin-top: 2%;
`;

const DemandLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EmailContainer = styled.div`
  background-color: ${tokens.colors.neutrals.white};
  border-radius: ${tokens.borders.radius.card};
  border: ${tokens.borders.width.thin} solid rgba(0, 0, 0, 0.1);
  padding: 1.5vw;
  margin-bottom: 2vw;
  font-family: ${tokens.typography.fontFamily.sansSerif};
  box-shadow: ${tokens.shadows.default};
`;

const EmailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vw;
  padding-bottom: 0.5vw;
  border-bottom: ${tokens.borders.width.thin} solid rgba(0, 0, 0, 0.1);
  font-size: ${tokens.typography.fontSize.sm};
  color: ${tokens.colors.neutrals.gray};
`;

const EmailSubject = styled.div`
  font-weight: ${tokens.typography.fontWeight.semibold};
  font-size: ${tokens.typography.fontSize.lg};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 1vw;
`;

const EmailBody = styled.div`
  font-size: ${tokens.typography.fontSize.base};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
`;

const PriorityTag = styled.span`
  display: inline-block;
  background-color: ${tokens.colors.accent.primary};
  color: ${tokens.colors.neutrals.white};
  font-size: ${tokens.typography.fontSize.xs};
  font-weight: ${tokens.typography.fontWeight.semibold};
  padding: 0.2vw 0.6vw;
  border-radius: ${tokens.borders.radius.sm};
  margin-left: 0.5vw;
`;

const RequestStack = styled.div`
  position: relative;
  height: 30%;
  margin-top: 2vw;
`;

const RequestCard = styled.div`
  position: absolute;
  width: 80%;
  height: 6vw;
  background-color: ${tokens.colors.neutrals.white};
  border-radius: ${tokens.borders.radius.card};
  box-shadow: ${tokens.shadows.default};
  padding: 1vw;
  font-size: ${tokens.typography.fontSize.base};
  color: ${tokens.colors.neutrals.darkGray};
  display: flex;
  align-items: center;
  
  &:nth-child(1) {
    top: 0;
    left: 10%;
    z-index: 3;
  }
  
  &:nth-child(2) {
    top: 1vw;
    left: 5%;
    z-index: 2;
    transform: rotate(-2deg);
  }
  
  &:nth-child(3) {
    top: 2vw;
    left: 15%;
    z-index: 1;
    transform: rotate(3deg);
  }
`;

const DemandRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${tokens.colors.neutrals.white};
  border-radius: ${tokens.borders.radius.card};
  box-shadow: ${tokens.shadows.default};
  padding: 2vw;
  display: flex;
  flex-direction: column;
`;

const ChartTitle = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 1vw;
  text-align: center;
`;

const Chart = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  padding-bottom: 2vw;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ChartBar = styled.div`
  width: 15%;
  background-color: ${tokens.colors.accent.primary};
  position: relative;
  opacity: ${props => props.$opacity || 1};
  height: ${props => props.$height || '10%'};
  
  &::after {
    content: '${props => props.$year}';
    position: absolute;
    bottom: -1.5vw;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${tokens.typography.fontSize.xs};
    color: ${tokens.colors.neutrals.gray};
  }
`;

/**
 * CaseStudy2Demand: Demand Skyrockets—Now What?
 * 
 * Layout: Full width slide with header and split content
 * Content: Email example, request stack, and growth chart
 */
const CaseStudy2Demand = () => {
  // Chart data
  const chartData = [
    { year: '2015', height: '10%', opacity: 0.6 },
    { year: '2017', height: '30%', opacity: 0.7 },
    { year: '2019', height: '55%', opacity: 0.8 },
    { year: '2021', height: '90%', opacity: 0.9 },
    { year: '2022', height: '95%', opacity: 1 }
  ];
  
  // Request data
  const requestData = [
    'Product animation needed for launch keynote',
    'Feature visualization for marketing',
    'Product concept animation for executive review'
  ];

  return (
    <SlideContainer>
      <DemandHeader>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Building a CG + Live Action Design Team</EditorialSubtitle>
        <DemandTitle>Demand Skyrockets—Now What?</DemandTitle>
        <DemandDescription>
          Dramatic increase in requests created both opportunity and challenge as animation became a crucial storytelling tool.
        </DemandDescription>
      </DemandHeader>
      
      <DemandContainer>
        <DemandLeft>
          <EmailContainer>
            <EmailHeader>
              <span>From: Product Director</span>
              <span>Date: March 2016</span>
            </EmailHeader>
            <EmailSubject>
              Need CG animation for executive presentation <PriorityTag>URGENT</PriorityTag>
            </EmailSubject>
            <EmailBody>
              We need a high-quality animation showing the new product features for the board presentation next week. Our previous slides aren't communicating the vision effectively. Can your team help? This is highest priority.
            </EmailBody>
          </EmailContainer>
          
          <RequestStack>
            {requestData.map((request, index) => (
              <RequestCard key={index}>{request}</RequestCard>
            ))}
          </RequestStack>
        </DemandLeft>
        
        <DemandRight>
          <ChartContainer>
            <ChartTitle>Animation Request Growth</ChartTitle>
            <Chart>
              {chartData.map((bar, index) => (
                <ChartBar 
                  key={index} 
                  $height={bar.height} 
                  $opacity={bar.opacity} 
                  $year={bar.year} 
                />
              ))}
            </Chart>
          </ChartContainer>
        </DemandRight>
      </DemandContainer>
    </SlideContainer>
  );
};

export default CaseStudy2Demand; 