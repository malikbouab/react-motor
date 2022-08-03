import React from 'react';
import { Navbar } from "./components/Navbar";
import Main from "./components/Main";
import { Button } from './components/Button';


export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
};