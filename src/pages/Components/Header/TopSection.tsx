import React from 'react';
import leetMate from '../../../assets/img/leetMate_logo.png'

type Props = {
    problem:string,
}

const TopSection = ({problem}:Props) => {
    return (
        <div className='w-[150px] h-[30px] flex-col text-white pb-11'>
            <img src={leetMate}></img>
            <h3>{problem}</h3>
        </div>
    )    
}
export default TopSection;