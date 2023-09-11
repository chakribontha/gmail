import { createContext, useState } from 'react';
import Main from './pages/Main';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark'); // Set the initial theme to 'dark'

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`} id={theme}>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
