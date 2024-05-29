import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('Breaking');
  const [lastName, setLastName] = useState('Bad');

  return (
    <div className="App">
      <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
        <div className="text-white text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-green text-8xl font-bold">Br</div>
            <div className="text-8xl font-bold">eaking</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-green text-8xl font-bold">Ba</div>
            <div className="text-8xl font-bold">d</div>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="flex justify-between mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="firstName" className="block text-white mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=""
                className="bg-gray text-black p-2 rounded w-full"
              />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="lastName" className="block text-white mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder=""
                className="bg-gray text-black p-2 rounded w-full"
              />
            </div>
          </div>
          <button className="bg-secondgreen text-white p-2 rounded w-full">
            Breakify
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
