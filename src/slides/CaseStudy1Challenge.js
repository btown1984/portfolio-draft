import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Challenge slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${tokens.colors.neutrals.white};
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ChallengeLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.dark};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChallengeTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 5%;
  max-width: 90%;
`;

const ChallengeDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  max-width: 90%;
`;

const ChallengeRight = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${tokens.colors.neutrals.black};
`;

const StakeholdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5%;
`;

const StakeholderItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 5%;
`;

const StakeholderIcon = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5vw;
  flex-shrink: 0;
`;

const StakeholderIconInner = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: ${tokens.colors.accent.primary};
  border-radius: 50%;
  opacity: 0.8;
`;

const StakeholderContent = styled.div`
  flex-grow: 1;
`;

const StakeholderTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 0.5vw;
`;

const StakeholderDesc = styled.p`
  font-size: ${tokens.typography.fontSize.lg};
  color: ${tokens.colors.neutrals.gray};
  line-height: 1.5;
`;

/**
 * CaseStudy1Challenge: Creating Space for Creative Excellence
 * 
 * Layout: Split layout with a dark left side and light right side
 * Content: Challenge description on the left, stakeholders on the right
 */
const CaseStudy1Challenge = () => {
  // Stakeholder data
  const stakeholders = [
    {
      title: 'Design Teams',
      description: 'Needed technical support to visualize their concepts quickly and accurately.'
    },
    {
      title: 'Marketing Leaders',
      description: 'Required consistent, high-quality visuals that communicated product value.'
    },
    {
      title: 'Executive Stakeholders',
      description: 'Demanded flawless visuals under extreme deadline pressure.'
    }
  ];

  return (
    <SlideContainer>
      <ChallengeLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <ChallengeTitle>Creating Space for Creative Excellence</ChallengeTitle>
        <ChallengeDescription>
          Supporting internal teams to create compelling product stories without technical friction.
        </ChallengeDescription>
      </ChallengeLeft>
      
      <ChallengeRight>
        <StakeholdersContainer>
          {stakeholders.map((stakeholder, index) => (
            <StakeholderItem key={index}>
              <StakeholderIcon>
                <StakeholderIconInner />
              </StakeholderIcon>
              <StakeholderContent>
                <StakeholderTitle>{stakeholder.title}</StakeholderTitle>
                <StakeholderDesc>{stakeholder.description}</StakeholderDesc>
              </StakeholderContent>
            </StakeholderItem>
          ))}
        </StakeholdersContainer>
      </ChallengeRight>
    </SlideContainer>
  );
};

export default CaseStudy1Challenge; 