import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../styles/tokens';
import ContentPlaceholder from '../components/ContentPlaceholder';
import { EditorialSubtitle } from '../components/Typography';

// Styled components for the Project Showcase slide
const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${tokens.colors.neutrals.white};
  overflow: hidden;
`;

const ContentArea = styled.div`
  position: relative;
  z-index: 2;
  padding: 8%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  pointer-events: none;
`;

const ProjectLabel = styled(EditorialSubtitle)`
  display: inline-block;
  width: fit-content;
  background-color: ${tokens.colors.accent.primary};
  color: ${tokens.colors.neutrals.white};
  padding: 0.25vw 0.6vw;
  margin-bottom: 2.5vw;
  text-transform: uppercase;
  font-size: 0.8vw;
`;

const ProjectTitle = styled.h2`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize['3xl']};
  line-height: 1.1;
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
  margin-bottom: 1.5vw;
  max-width: 70%;
`;

const ProjectDescriptor = styled.p`
  font-size: ${tokens.typography.fontSize.xl};
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  max-width: 50%;
  margin-bottom: 2.5vw;
`;

const ProjectDetails = styled.div`
  display: flex;
  gap: 4vw;
  margin-top: 2vw;
`;

const ProjectDetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectDetailLabel = styled.span`
  font-size: ${tokens.typography.fontSize.lg};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5vw;
  font-weight: ${tokens.typography.fontWeight.medium};
`;

const ProjectDetailValue = styled.span`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: ${tokens.typography.fontSize.xl};
  font-weight: ${tokens.typography.fontWeight.semibold};
  color: ${tokens.colors.neutrals.white};
`;

// Overlay gradient that goes on top of the video
const MediaOverlayGradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%);
  z-index: 1;
  pointer-events: none;
`;

/**
 * CaseStudy1: Microsoft Surface Product Launches
 * 
 * Layout: Full bleed background video with text overlay at bottom
 * Typography: Large title with supporting text and detail items
 * Visual: Background video with gradient overlay for text legibility
 * Interactive: Background video is droppable for custom content
 */
const CaseStudy1 = ({ onContentDrop }) => {
  const [hasMedia, setHasMedia] = useState(false);
  const [currentMediaPath, setCurrentMediaPath] = useState(null);

  // Load initial media state from localStorage
  useEffect(() => {
    const savedPath = localStorage.getItem('media-case-study-1');
    if (savedPath) {
      console.log('CaseStudy1 initial load, found path:', savedPath);
      setHasMedia(true);
      setCurrentMediaPath(savedPath);
    } else {
      setHasMedia(false);
      setCurrentMediaPath(null);
    }
  }, []);

  // Handler for when ContentPlaceholder successfully drops/loads media
  const handleMediaUpdate = (id, filePath, fileType) => {
    console.log('CaseStudy1 received media update:', { id, filePath, fileType });
    if (id === 'case-study-1') {
      if (filePath) {
        setHasMedia(true);
        setCurrentMediaPath(filePath);
      } else {
        setHasMedia(false);
        setCurrentMediaPath(null);
      }
      // Propagate if necessary
      if (onContentDrop) {
        onContentDrop(id, filePath, fileType);
      }
    }
  };

  return (
    <SlideContainer>
      {/* Background Media */}
      <ContentPlaceholder
        id="case-study-1"
        placeholderText="Drag video here for background"
        isDropZone={true}
        onDrop={handleMediaUpdate}
        savedMediaPath={currentMediaPath}
        $isTitleSlideImage={true}
        style={{ zIndex: 0 }}
      />
      
      {/* Gradient Overlay */}
      <MediaOverlayGradient
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      />
      
      {/* Content */}
      <ContentArea>
        <ProjectLabel>Case Study 1</ProjectLabel>
        <ProjectTitle>Microsoft Surface <br /> Product Launches</ProjectTitle>
        
        <ProjectDetails>
          <ProjectDetailItem>
            <ProjectDetailLabel>Timeline</ProjectDetailLabel>
            <ProjectDetailValue>2012-2014</ProjectDetailValue>
          </ProjectDetailItem>
          <ProjectDetailItem>
            <ProjectDetailLabel>Role</ProjectDetailLabel>
            <ProjectDetailValue>Lead CG Artist</ProjectDetailValue>
          </ProjectDetailItem>
        </ProjectDetails>
      </ContentArea>
    </SlideContainer>
  );
};

export default CaseStudy1; 