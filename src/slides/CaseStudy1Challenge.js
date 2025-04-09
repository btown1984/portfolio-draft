import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';

// Styled components for the Light Background with Numbered Stack slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 40% 60%;
`;

const LeftPanel = styled.div`
  background-color: ${tokens.colors.backgrounds.light};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 22vw;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.03);
  line-height: 1;
  z-index: 1;
`;

const MainTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 5vw;
  line-height: 1;
  font-weight: 800;
  color: ${tokens.colors.neutrals.black};
  position: relative;
  z-index: 2;
`;

const ConnectionText = styled.p`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 1.2vw;
  font-weight: 400;
  font-style: italic;
  color: ${tokens.colors.neutrals.gray};
  margin-top: 2vw;
  max-width: 100%;
  position: relative;
  z-index: 2;
`;

const ConnectionHighlight = styled.span`
  color: ${tokens.colors.accent.primary};
  font-weight: 600;
  font-style: normal;
`;

const RightPanel = styled.div`
  padding: 6% 8% 6% 0;
  background-color: ${tokens.colors.backgrounds.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NumberedStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
`;

const NumberedItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.5vw 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemNumber = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 4.5vw;
  font-weight: 800;
  line-height: 0.8;
  color: rgba(255, 51, 102, 0.2);
  margin-right: 1.5vw;
  flex-shrink: 0;
  width: 3.5vw;
  text-align: center;
`;

const ItemContent = styled.div`
  flex-grow: 1;
  padding-top: 0.5vw;
`;

const ItemTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 1.6vw;
  font-weight: 600;
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 0.5vw;
`;

const ItemDescription = styled.p`
  font-size: 0.9vw;
  color: ${tokens.colors.neutrals.gray};
  line-height: 1.5;
`;

/**
 * CaseStudy1Challenge: My Customers
 * 
 * Layout: 40/60 split with light backgrounds
 * Content: Bold "MY CUSTOMERS" title on left, numbered stack of customer types on right
 */
const CaseStudy1Challenge = () => {
  // Customer data
  const customers = [
    {
      number: '1',
      title: 'Design Teams',
      description: 'Technical support to visualize concepts quickly and accurately'
    },
    {
      number: '2',
      title: 'Marketing Leaders',
      description: 'High-quality visuals that communicate product value'
    },
    {
      number: '3',
      title: 'Executive Stakeholders',
      description: 'Flawless visuals under extreme deadline pressure'
    }
  ];

  return (
    <SlideContainer>
      <LeftPanel>
        <BackgroundText>MY</BackgroundText>
        <MainTitle>MY CUSTOMERS</MainTitle>
        <ConnectionText>
          Building bridges at the <ConnectionHighlight>intersection</ConnectionHighlight> of creative needs
        </ConnectionText>
      </LeftPanel>
      
      <RightPanel>
        <NumberedStack>
          {customers.map((customer, index) => (
            <NumberedItem key={index}>
              <ItemNumber>{customer.number}</ItemNumber>
              <ItemContent>
                <ItemTitle>{customer.title}</ItemTitle>
                <ItemDescription>{customer.description}</ItemDescription>
              </ItemContent>
            </NumberedItem>
          ))}
        </NumberedStack>
      </RightPanel>
    </SlideContainer>
  );
};

export default CaseStudy1Challenge; 