import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import ContentPlaceholder from './ContentPlaceholder';
import tokens from '../styles/tokens';

// Updated stats card with image and 2:3 aspect ratio - now with frosted acrylic as base layer
const CardWrapper = styled.div`
  position: relative;
  border-radius: ${tokens.borders.radius.card};
  overflow: hidden;
  aspect-ratio: 2/3;
  height: 100%;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  /* Base frosted acrylic styling */
  background-color: ${tokens.colors.cards.acrylic.background};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${tokens.colors.cards.acrylic.border};
  width: 100%; /* Ensure full width within grid cell */
`;

// Image container with gradient mask for smooth fade
const CardImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* Refined gradient for better balance with the new layout */
  mask-image: linear-gradient(to bottom, 
    rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 20%, 
    rgba(0,0,0,0.9) 30%,
    rgba(0,0,0,0.7) 50%,
    rgba(0,0,0,0.4) 65%,
    rgba(0,0,0,0.2) 80%,
    rgba(0,0,0,0) 90%
  );
  -webkit-mask-image: linear-gradient(to bottom, 
    rgba(0,0,0,1) 0%, 
    rgba(0,0,0,1) 20%, 
    rgba(0,0,0,0.9) 30%,
    rgba(0,0,0,0.7) 50%,
    rgba(0,0,0,0.4) 65%,
    rgba(0,0,0,0.2) 80%,
    rgba(0,0,0,0) 90%
  );
`;

// Content area moved to center of transparent area
const CardContentPanel = styled.div`
  position: absolute;
  bottom: -2vh; /* Positioned below the bottom edge to push text lower */
  left: 0;
  width: 100%;
  z-index: 3;
  display: grid;
  padding: 3vw; /* Base padding */
  padding-left: 1.5vw; /* Less padding on left to move content further left */
  padding-bottom: 4vh; /* Extra padding at bottom to ensure text is visible */
`;

// Redesigned stat card content
const StatGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4vw; /* Increased from 0.2vw for better spacing between elements */
`;

const StatValue = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 2.8vw; /* Slightly reduced from 3vw */
  font-weight: ${tokens.typography.fontWeight.bold};
  line-height: 0.8;
  color: ${tokens.colors.neutrals.white};
  display: flex;
  align-items: baseline;
`;

const StatSuffix = styled.span`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 1.1vw; /* Slightly reduced from 1.2vw */
  font-weight: ${tokens.typography.fontWeight.medium};
  color: ${tokens.colors.neutrals.white};
  margin-left: 0.5vw;
  padding-bottom: 0.2vw;
`;

const StatDescription = styled.div`
  font-family: ${tokens.typography.fontFamily.serif};
  font-size: 1.6vw; /* Reduced from 1.8vw */
  font-weight: ${tokens.typography.fontWeight.medium};
  line-height: 1.3; /* Increased from 1.2 for better readability */
  color: ${tokens.colors.neutrals.white};
  margin-top: 0.3vw; /* Increased slightly from 0.2vw */
`;

/**
 * StatCard - A reusable component for displaying statistics with images
 * 
 * @param {string} id - Unique identifier for the card
 * @param {string} statValue - The primary statistic number
 * @param {string} statSuffix - Text to display after the stat value (e.g., "Years")
 * @param {string} description - The description text for the statistic
 * @param {string} initialImage - Path to initial image (optional)
 * @param {function} onMediaUpdate - Callback when media is updated
 */
const StatCard = ({ 
  id, 
  statValue, 
  statSuffix, 
  description, 
  initialImage,
  onMediaUpdate
}) => {
  const [cardImage, setCardImage] = useState(initialImage || null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: -30 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Load initial image if provided
  useEffect(() => {
    if (initialImage) {
      setCardImage(initialImage);
    }
  }, [initialImage]);

  // Handler for image content drops
  const handleMediaUpdate = (id, filePath) => {
    console.log('Card image update:', { id, filePath });
    setCardImage(filePath);
    // Reset position when new image is added, keeping same position
    setImagePosition({ x: 0, y: -30 });
    
    if (onMediaUpdate) {
      onMediaUpdate(id, filePath);
    }
  };

  // Mouse event handlers for repositioning
  const handleMouseDown = (e) => {
    if (e.ctrlKey && cardImage && containerRef.current) {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      });
      document.body.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    setImagePosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart.x, dragStart.y]);

  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = 'default';
    }
  }, [isDragging]);

  // Add event listeners for mouse events to the window
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp, { once: true });
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <CardWrapper>
      <CardImageContainer
        ref={containerRef}
        onMouseDown={handleMouseDown}
        style={{ 
          cursor: cardImage ? (isDragging ? 'grabbing' : 'grab') : 'default',
          overflow: 'hidden'
        }}
      >
        <ContentPlaceholder
          id={id}
          placeholderText={`Drag image for ${description}`}
          isDropZone={!isDragging}
          onDrop={handleMediaUpdate}
          savedMediaPath={cardImage}
          $height="100%"
          $width="100%"
          $padding="0"
          $backgroundColor="transparent"
          imagePosition={imagePosition}
        />
      </CardImageContainer>
      
      <CardContentPanel>
        <StatGroup>
          <StatValue>
            {statValue}
            <StatSuffix>{statSuffix}</StatSuffix>
          </StatValue>
          <StatDescription>{description}</StatDescription>
        </StatGroup>
      </CardContentPanel>
    </CardWrapper>
  );
};

export default StatCard; 