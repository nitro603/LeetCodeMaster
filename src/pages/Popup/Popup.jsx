import React from 'react';
import SolutionButton from '../Components/Button/button'
import UserInterface from '../Components/Interface/UserInterface'
import TopSection from '../Components/Header/TopSection'
import { useState } from 'react';



const Popup = () => {

  const [expand, setExpand] = useState(0);
  const [type, setType] = useState(0)
  
  const Expand = (type) =>{
    setExpand(1)
    setType(type)
  }

  if(expand == 1){
    return (
      <UserInterface solutionType={type}></UserInterface>
    )
  }else{
    return (
      <div className='w-64 h-56 border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
        <TopSection></TopSection>
        <div className='flex flex-col content-center justify-around flex-wrap gap-y-3	'>
          <SolutionButton solutionType='Video' button={() => Expand(0)}/> 
          <SolutionButton solutionType='Written' button={() => Expand(1)}/>
        </div>
      </div>
    );
  }
};

export default Popup;
