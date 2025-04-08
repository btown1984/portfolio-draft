import React from 'react';
import tokens from '../styles/tokens';
import { Eyebrow, SectionTitle, BodyText, NumberedItem, ItemTitle, ItemDescription } from '../components/Typography';
import { ContentList, ListItem, ItemPrefix, ItemContent } from '../components/Layout';
import { AgendaSlideLayout } from '../components/SlideLayouts';

/**
 * Agenda Slide
 * 
 * Layout: Two-column grid, left light background, right dark background
 * Content: Section title and description on left, numbered list on right
 */
const Agenda = () => {
  const agendaData = [
    {
      number: '01',
      title: 'About Me',
      description: 'Professional background, expertise, and approach to design challenges.'
    },
    {
      number: '02',
      title: 'Launching Microsoft Surface',
      description: 'Creating content for a global launch from the ground up.'
    },
    {
      number: '03',
      title: 'Building a CG + Live Action Design Team',
      description: 'Pushing design team storytelling to the next level.'
    },
    {
      number: '04',
      title: 'Transforming Visual Design With AI For Windows and Devices',
      description: 'Leveraging the latest tools to produce more with less.'
    },
  ];

  // Create the left and right content elements
  const leftContent = (
    <>
      <Eyebrow>Portfolio Review</Eyebrow>
      <SectionTitle>Agenda</SectionTitle>
      <BodyText>
        A journey through my professional background and select case studies demonstrating my approach, process, and results.
      </BodyText>
    </>
  );

  const rightContent = (
    <ContentList>
      {agendaData.map((item) => (
        <ListItem key={item.number}>
          <ItemPrefix>
            <NumberedItem>{item.number}</NumberedItem>
          </ItemPrefix>
          <ItemContent>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemContent>
        </ListItem>
      ))}
    </ContentList>
  );

  // Use the AgendaSlideLayout component which automatically handles the proper styling
  return (
    <AgendaSlideLayout>
      {leftContent}
      {rightContent}
    </AgendaSlideLayout>
  );
};

export default Agenda; 