import React, { useState } from 'react';
import Logo from './components/Logo';
import Form from './components/Form';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('Breaking');
  const [lastName, setLastName] = useState('Bad');

  return (
    <div className="App">
      <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
        <Logo />
        <Form />
      </div>
    </div>
  );
}

export default App;
