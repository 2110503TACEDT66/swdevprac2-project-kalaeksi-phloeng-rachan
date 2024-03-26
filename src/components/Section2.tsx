'use client'
import { useIsVisible } from "@/hooks/useIsVisible";
import Image from "next/image";
import { useRef } from "react";

export default function Section2() {
    const ref2:any = useRef();
    const isVisible2 = useIsVisible(ref2);

    return (
        <section className='text-center h-[1080px] p-[100px]'>
            <div ref={ref2} className={`flex flex-row justify-center transition-all ease-in duration-1000 ${isVisible2 ? "opacity-100 -translate-x-10" : "opacity-0"}`}>
                <Image src={"/img/image-10@2x.png"} alt={"massagePicture"} width={960} height={600} className='rounded-[100px]'/>
                <div className='flex flex-col justify-center px-8'>
                    <h3 className='text-[24px] font-bold'>Find Calm: Reserve Your Relaxing Massage Now</h3>
                    <p className='text-left text-[16px]'>"Welcome to our tranquil sanctuary, where relaxation awaits. Our expert therapists offer personalized treatments to melt away stress and tension. Book your appointment now for a rejuvenating experience."</p>
                </div>
            </div>
        </section>
    );
}