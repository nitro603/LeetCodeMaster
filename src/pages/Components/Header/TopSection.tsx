import React from 'react';
import leetMate from '../../../assets/img/leetMate_logo.png'

type Props = {
    problem:string,
}

const TopSection = ({problem}:Props) => {
    const width = () =>{
        if(problem.length >= 25){
            return 'w-60 pr-10'
        }else{
            return 'w-30 m-auto'
        }
    }
    return (
        <div className='w-[120px] h-[30px] m-auto flex-col text-white pb-11 font-code text-xsm'>
            <img src={leetMate}></img>
            <p className={width()}>{problem}</p>
        </div>
    )    
}
export default TopSection;