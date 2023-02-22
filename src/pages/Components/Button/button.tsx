import React from "react";

type Props = {
    solutionType:string,
    color:string
}

const handleClick = () => {
        console.log('this is:',);
      };

const SolutionButton = ({solutionType, color}:Props) => {
      return <button className="h-10 w-16 bg-gray-400" onClick={handleClick}>
            <div>&lt;{solutionType}/&gt;</div>
        </button>
}

export default SolutionButton
