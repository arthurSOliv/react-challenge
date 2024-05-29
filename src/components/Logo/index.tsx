import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import periodicElements from '../../data/periodicElements.json';
import '../../App.css';

const periodicElementsSymbols = periodicElements.elementsSymbols;

function Logo() {
  const firstName = useSelector((state: RootState) => state.firstName);
  const lastName = useSelector((state: RootState) => state.lastName);

  const checkSymbols = (text: string) => {
    const firstNameSymbol = text.slice(0, 2);

    const isFirstNameSymbol = periodicElementsSymbols.includes(firstNameSymbol);

    if (isFirstNameSymbol) {
        return firstNameSymbol;
    } else {
        alert('Error: Symbols not found');
        return '';
    }
  };
  
  return (
    <div className="text-white text-center mb-8">
        <div className="flex items-center justify-center mb-2">
            <div className="bg-green text-8xl font-bold">{checkSymbols(firstName)}</div>
            <div className="text-8xl font-bold">{firstName.substring(2)}</div>
        </div>
        <div className="flex items-center justify-center">
            <div className="bg-green text-8xl font-bold">{checkSymbols(lastName)}</div>
            <div className="text-8xl font-bold">{lastName.substring(2)}</div>
        </div>
    </div>
  );
}

export default Logo;
