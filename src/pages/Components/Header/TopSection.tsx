import React from 'react';
import leetMate from '../../../assets/img/leetMate_logo.png'

type Props = {
    problem:string,
}

const TopSection = ({problem}:Props) => {
    const width = () =>{
        if(problem.length >= 25){
            return 'w-40 m-auto'
        }else{
            return 'w-20 m-auto'
        }
    }
    return (
        <div className='w-[150px] h-[30px] m-auto flex-col text-white pb-11'>
            <img src={leetMate}></img>
            <h3 className={width()}>{problem}</h3>
        </div>
    )    
}
export default TopSection;