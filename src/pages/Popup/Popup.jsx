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

  const handleClick = ()=> {
    var newURL = "https://leetcode.com/problemset/all/"
    chrome.tabs.create({ url: newURL })
  }

  if(url.includes("https://leetcode.com/problems/")){
    const problem = () =>{
      let problemString = url.substring(29)
      problemString = problemString.replaceAll("/", "")
      problemString = problemString.replaceAll("-", " ")
      console.log(problemString)
      if (problemString.length > 25){
        problemString = problemString.substring(0,25) + "..."
        const finalSentence = problemString.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        return finalSentence
      }
      problemString = problemString.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
      return problemString
    }

    if(expand == 1){
      return (
        <UserInterface solutionType={type} problem={problem()} ></UserInterface>
      )
    }else{
      return (
        <div className='flex-col w-64 h-56 border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
          <TopSection problem={problem()}></TopSection>
          <div className='flex flex-col content-center justify-around flex-wrap gap-y-3	mt-5 font-code'>
            <SolutionButton solutionType='Video' button={() => Expand(0)}/> 
            <SolutionButton solutionType='Written' button={() => Expand(1)}/>
          </div>
        </div>
      )
    }
  }else{
    return(
      <div className= "w-48 h-32 border-2 flex-col justify-items-center border-black text-white bg-gradient-to-t from-gray-900 to-black">
        <div className='w-42 h-24 mt-6 justify-center'>
          <div className='w-36 h-6 m-auto justify-center'>Let's solve some problems!</div>
          <button className="w-32 h-10 flex justify-center m-auto bg-yellow-600 rounded-md" onClick={handleClick}>
              <div className='m-auto text-base'>Go to LeetCode</div>
          </button>
        </div>
      </div>
    )
  }
}

export default Popup;
