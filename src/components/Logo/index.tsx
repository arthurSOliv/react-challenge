import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';
import '../../App.css';

function Logo() {
  const firstName = useSelector((state: RootState) => state.firstName);
  const lastName = useSelector((state: RootState) => state.lastName);
  
  return (
    <div className="text-white text-center mb-8">
        <div className="flex items-center justify-center mb-2">
            <div className="bg-green text-8xl font-bold">Br</div>
            <div className="text-8xl font-bold">{firstName}</div>
        </div>
        <div className="flex items-center justify-center">
            <div className="bg-green text-8xl font-bold">Ba</div>
            <div className="text-8xl font-bold">{lastName}</div>
        </div>
    </div>
  );
}

export default Logo;
