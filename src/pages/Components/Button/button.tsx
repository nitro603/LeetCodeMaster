import React from "react";

type Props = {
    solutionType:string,
    button:()=>{}
}


const SolutionButton = ({solutionType, button}:Props) => {

      return <button className="h-10 w-16 bg-gray-400" onClick={button}>
            <div>&lt;{solutionType}/&gt;</div>
        </button>
}

export default SolutionButton
