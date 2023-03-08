import React from 'react';

type Props = {
    solutionType:number,
}

const UserInterface = ({solutionType}:Props) => {

    if(solutionType == 0){
    //Display video solutions
        return (
            <div className='w-[550px] h-[420px] border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
                <p>video</p>
            </div>

        );

    }else{
    //display written Solution grabbed from chatGPT
        return (
            <div className='w-[550px] h-[420px] border-2 border-black bg-gradient-to-t from-gray-900 to-black'>
                <p>written</p>
            </div>

        );

    }
};

export default UserInterface;
