import React from 'react';
import { createGlobalStyle } from 'styled-components';
import PresentationController from './components/PresentationController';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <PresentationController />
    </>
  );
}

export default App;