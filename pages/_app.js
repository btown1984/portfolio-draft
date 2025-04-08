import React from 'react';
import { useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';

// Function to determine if a prop should be forwarded to DOM
const shouldForwardProp = (prop) => {
  // Don't forward props that start with $ or the 'active' prop
  return prop !== 'active' && !prop.startsWith('$');
};

function MyApp({ Component, pageProps }) {
  // Remove React-scripts specific code that might be in the document
  useEffect(() => {
    // This removes the initial CRA loading screen if it exists
    const ssStyles = document.getElementById('server-side-styles');
    if (ssStyles) {
      ssStyles.parentNode.removeChild(ssStyles);
    }
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Component {...pageProps} />
    </StyleSheetManager>
  );
}

export default MyApp; 