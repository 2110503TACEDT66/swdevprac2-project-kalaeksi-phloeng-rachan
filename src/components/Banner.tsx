'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Banner () {
    const [index, setIndex] = useState(0) //-1 0 1

    return (
        <div className={`duration-1000 flex flex-row justify-center items-end mt-[100px] ${index===-1 ? 'pl-[500px]': ''} ${index===1 ? 'pr-[500px]': ''}`}>
            <Image className='duration-1000' src={'/img/image-7@2x.png'} alt={"leftPicture"} width={485-(index)*100} height={380-(index)*100}/>
            <Image className='mx-[20px]' src={'/leftArrow.svg'} alt={"leftArrow"} width={100} height={100} onClick={(e)=>{e.stopPropagation(); setIndex(Math.max(index - 1, -1));}}/>
            <Image className='duration-1000 rounded-[100px]' src={'/img/massage1.jpg'} alt={"leftPicture"} width={485+(-Math.abs(index) + 1)*100} height={380+(index + 1)*100}/>
            <Image className='mx-[20px]' src={'/rightArrow.svg'} alt={"rightArrow"} width={100} height={100} onClick={(e)=>{e.stopPropagation(); setIndex(Math.min(index + 1, 1));}}/>
            <Image className='duration-1000' src={'/img/image-10@2x.png'} alt={"leftPicture"} width={485+(index)*100} height={380+(index)*100}/>
        </div>
    );
}