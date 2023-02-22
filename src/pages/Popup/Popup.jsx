import React from 'react';
import SolutionButton from '../Components/Button/button'


const Popup = () => {
  return (
    <div className='w-64 h-56 border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
      <h1 className='text-lg text-gray-100 '>LeetcodeMaster</h1>
      <div className='flex flex-col content-center justify-around flex-wrap gap-y-3	'>
        <SolutionButton solutionType='Written'/>
        <SolutionButton solutionType='Video'/>
      </div>
    </div>
  );
};

export default Popup;
