import { createGlobalStyle } from 'styled-components';
import tokens from './tokens';

const GlobalStyle = createGlobalStyle`
  /* Base reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body styles */
  html, body {
    font-family: ${tokens.typography.fontFamily.sansSerif};
    font-size: 16px;
    line-height: ${tokens.typography.lineHeight.normal};
    color: ${tokens.colors.neutrals.black};
    background-color: ${tokens.colors.backgrounds.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }

  /* Typography baseline */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${tokens.typography.fontFamily.serif};
    font-weight: ${tokens.typography.fontWeight.semibold};
    line-height: ${tokens.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${tokens.typography.fontSize['4xl']};
  }

  h2 {
    font-size: ${tokens.typography.fontSize['3xl']};
  }

  h3 {
    font-size: ${tokens.typography.fontSize['2xl']};
  }

  h4 {
    font-size: ${tokens.typography.fontSize.xl};
  }

  h5 {
    font-size: ${tokens.typography.fontSize.lg};
  }

  h6 {
    font-size: ${tokens.typography.fontSize.base};
  }

  p {
    margin-bottom: ${tokens.spacing[4]};
    line-height: ${tokens.typography.lineHeight.relaxed};
  }

  /* Link styles */
  a {
    color: ${tokens.colors.accent.primary};
    text-decoration: none;
    transition: color ${tokens.animation.duration.fast} ${tokens.animation.easing.easeInOut};

    &:hover {
      color: ${tokens.colors.accent.secondary};
    }
  }

  /* Image handling */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Presentation specific */
  .presentation-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  /* Fullscreen mode styles */
  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${tokens.colors.backgrounds.dark};
    z-index: ${tokens.zIndex[100]};
  }

  /* Drag and drop styling */
  .draggable-content {
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }

  .drop-zone {
    border: ${tokens.borders.width.thin} dashed ${tokens.colors.neutrals.mediumGray};
    border-radius: ${tokens.borders.radius.default};
    transition: all ${tokens.animation.duration.fast} ${tokens.animation.easing.easeOut};
    
    &.active {
      border-color: ${tokens.colors.accent.primary};
      background-color: rgba(255, 51, 102, 0.05);
    }
  }
`;

export default GlobalStyle;