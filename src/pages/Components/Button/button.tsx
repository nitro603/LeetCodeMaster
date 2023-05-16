import React from "react";

type Props = {
    solutionType:string,
    button:()=>{}
}


const SolutionButton = ({solutionType, button}:Props) => {

      return <button className="h-10 w-32 bg-gray-400 hover:bg-yellow-600 rounded-md" onClick={button}>
            <div>&lt;{solutionType}/&gt;</div>
        </button>
}

export default SolutionButton
