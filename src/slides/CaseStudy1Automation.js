import React from 'react';
import styled from 'styled-components';
import tokens from '../styles/tokens';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Automation slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 55% 45%;
`;

const AutomationLeft = styled.div`
  background-color: ${tokens.colors.backgrounds.offWhite};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${tokens.colors.neutrals.black};
`;

const AutomationTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.black};
  margin-bottom: 5%;
  max-width: 90%;
`;

const AutomationDescription = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: ${tokens.colors.neutrals.darkGray};
  margin-bottom: 5%;
  max-width: 90%;
`;

const CodeContainer = styled.div`
  background-color: #1E1E1E;
  border-radius: ${tokens.borders.radius.card};
  padding: 1.5vw;
  margin-top: 3%;
  position: relative;
`;

const CodeHeader = styled.div`
  font-family: ${tokens.typography.fontFamily.monospace};
  font-size: 0.9vw;
  color: #FFFFFF;
  margin-bottom: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CodeDots = styled.div`
  display: flex;
  gap: 0.5vw;
`;

const CodeDot = styled.div`
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 50%;
  background-color: ${props => props.$color};
`;

const CodeContent = styled.pre`
  font-family: ${tokens.typography.fontFamily.monospace};
  font-size: 0.8vw;
  line-height: 1.6;
  color: #D4D4D4;
  overflow-x: auto;
`;

const AutomationRight = styled.div`
  background-color: ${tokens.colors.backgrounds.dark};
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${tokens.colors.neutrals.white};
`;

const BenefitList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vw;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BenefitIcon = styled.div`
  width: 3vw;
  height: 3vw;
  background-color: rgba(255, 51, 102, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5vw;
  flex-shrink: 0;
`;

const BenefitIconInner = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  background-color: ${tokens.colors.accent.primary};
  border-radius: 50%;
  opacity: 0.8;
`;

const BenefitContent = styled.div`
  flex-grow: 1;
`;

const BenefitTitle = styled.h3`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 0.5vw;
`;

const BenefitDesc = styled.p`
  font-size: ${tokens.typography.fontSize.lg};
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

// Styled components for code syntax highlighting
const CodeComment = styled.span`
  color: #6A9955;
`;

const CodeKeyword = styled.span`
  color: #569CD6;
`;

/**
 * CaseStudy1Automation: Automating Complexity Away
 * 
 * Layout: Split layout with code on the left and benefits on the right
 * Content: Python automation code and key benefits
 */
const CaseStudy1Automation = () => {
  // Benefits data
  const benefitsData = [
    {
      title: 'Technical Overhead Reduced',
      description: 'Automated file management, render distribution, and error handling'
    },
    {
      title: 'Creative Focus Enabled',
      description: 'Designers freed from technical tasks to focus on visual storytelling'
    },
    {
      title: '24/7 Productivity',
      description: 'Overnight and weekend rendering without manual supervision'
    }
  ];

  return (
    <SlideContainer>
      <AutomationLeft>
        <EditorialSubtitle $color={tokens.colors.accent.primary}>Microsoft Surface Product Launches</EditorialSubtitle>
        <AutomationTitle>Automating Complexity Away</AutomationTitle>
        <AutomationDescription>
          Using Python-based automation to eliminate technical overhead and free up creative focus.
        </AutomationDescription>
        
        <CodeContainer>
          <CodeHeader>
            <span>render_automation.py</span>
            <CodeDots>
              <CodeDot $color="#FF605C" />
              <CodeDot $color="#FFBD44" />
              <CodeDot $color="#00CA4E" />
            </CodeDots>
          </CodeHeader>
          <CodeContent>
            <CodeComment># Automated distribution of rendering tasks</CodeComment><br/>
            <CodeKeyword>def</CodeKeyword> distribute_renders(project_files, render_nodes):<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<CodeComment># Calculate optimal distribution</CodeComment><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;distribution = optimize_workload(project_files, render_nodes)<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<CodeComment># Prepare render jobs</CodeComment><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<CodeKeyword>for</CodeKeyword> node, files <CodeKeyword>in</CodeKeyword> distribution.items():<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prepare_node(node)<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;submit_jobs(node, files)<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<CodeComment># Monitor progress</CodeComment><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<CodeKeyword>return</CodeKeyword> monitor_render_progress(distribution)
          </CodeContent>
        </CodeContainer>
      </AutomationLeft>
      
      <AutomationRight>
        <BenefitList>
          {benefitsData.map((benefit, index) => (
            <BenefitItem key={index}>
              <BenefitIcon>
                <BenefitIconInner />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDesc>{benefit.description}</BenefitDesc>
              </BenefitContent>
            </BenefitItem>
          ))}
        </BenefitList>
      </AutomationRight>
    </SlideContainer>
  );
};

export default CaseStudy1Automation; 