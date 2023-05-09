
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './Main.js';
import SignIn from './SignIn.js';
import EmailConfirm from './SignUp/emailConfirm.js';
import SignUp from './SignUp/SignUp.js';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/emailConfirm" element={<EmailConfirm/> }/>
      </Routes>
    </HashRouter>
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
