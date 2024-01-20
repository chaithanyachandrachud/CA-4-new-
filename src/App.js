import React, { useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { DataProvider } from './context/dataContext';

import './App.css'; // Assuming this is the name of your CSS file

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DataProvider>
      <div className={`app-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
        {/* Toggle Theme Button */}
        {/* <button onClick={toggleDarkMode} className="toggle-theme-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}

        {/* Welcome Page */}
        <Start />

        {/* Quiz Page */}
        <Quiz />

        {/* Result Page */}
        <Result />
      </div>
    </DataProvider>
  );
}

export default App;
