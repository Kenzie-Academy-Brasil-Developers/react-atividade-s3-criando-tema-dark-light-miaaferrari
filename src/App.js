import { useCallback, useState } from 'react';
import { AppContainer, MainSection } from './Components/app.style';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';
import { Button } from './Components/button.style';

function App() {

  const [currentTheme, setCurrentTheme] = useState('light');

  const getOpositeTheme = useCallback(
    () => (currentTheme === 'light' ? 'dark' : 'light'),
    [currentTheme],
  ) 

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>You are in {currentTheme} mode</h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            Switch to {getOpositeTheme()} mode
          </Button>
        </MainSection>
      </AppContainer>
      
    </ThemeProvider>
  );
}

export default App;
