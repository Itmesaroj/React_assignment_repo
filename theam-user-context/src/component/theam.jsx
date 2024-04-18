import React, { useContext } from 'react';
import { ThemeContext } from './themecontext';

function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p style={{ color: theme === 'light' ? 'pink' : 'red' }}>
        This text will be pink if the theme is light, and red if the theme is dark.
      </p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Theme;
