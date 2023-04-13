import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('/main')
      .then((response) => response.text())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  return (
    <Box
      id="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '1280px',
        height: '100vh',
        width: '100vm',
        margin: '0 auto',
      }}
    >
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/Q&A" element={<QnA />} />
          <Route component={NotFound} />
        </Routes>
      </HashRouter>
    </Box>
  );
}

function About() {
  return <div>About</div>;
}
function Tutorial() {
  return <div>Tutorial</div>;
}

function QnA() {
  return <div>Q&A</div>;
}

function NotFound() {
  return <div>NotFound</div>;
}

export default App;
