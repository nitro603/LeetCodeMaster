import React from 'react';
import SolutionButton from '../Components/Button/button'
import UserInterface from '../Components/Interface/UserInterface'
import TopSection from '../Components/Header/TopSection'
import { useState } from 'react';



const Popup = () => {
  const [expand, setExpand] = useState(0)
  const [type, setType] = useState(0)
  const [url, setUrl] = useState("")
  
  const Expand = (type) =>{
    setExpand(1)
    setType(type)
  }

  chrome.tabs.query({ active: true, currentWindow: true}, async function(tabs) {
    var tabURL = tabs[0].url
    setUrl(tabURL)
  })

  if(url.includes("https://leetcode.com/problems/")){
    const problem = () =>{
      let problemString = url.substring(29)
      problemString = problemString.replaceAll("/", "")
      problemString = problemString.replaceAll("-", " ")
      
      return problemString
    }

    if(expand == 1){
      return (
        <UserInterface solutionType={type} problem={problem()} ></UserInterface>
      )
    }else{
      return (
        <div className='w-64 h-56 border-2 flex-col border-black bg-gradient-to-t from-gray-900 to-black content-center justify-around '>
          <TopSection problem={problem()}></TopSection>
          <div className='flex'>
            <SolutionButton solutionType='Video' button={() => Expand(0)}/> 
            <SolutionButton solutionType='Written' button={() => Expand(1)}/>
          </div>
        </div>
      )
    }
  }else{
    return(
      <div className= "w-48 h-20 border-2 flex-col border-black bg-gradient-to-t from-gray-900 to-black content-center justify-around text-white">
        Go to Leetcode and choose a problem
      </div>
    )
  }
}

export default Popup;
