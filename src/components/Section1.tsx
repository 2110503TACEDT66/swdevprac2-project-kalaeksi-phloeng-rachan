'use client'
import { useIsVisible } from "@/hooks/useIsVisible";
import Image from "next/image";
import { useRef } from "react";

export default function Section1() {
    const ref1:any = useRef();
    const isVisible1 = useIsVisible(ref1);

    return (
        <section className='text-center h-[1080px] py-[240px] px-[60px] bg-gray-lighter'>
            <div ref={ref1} className={`flex flex-row justify-center transition-all ease-in duration-1000 ${isVisible1 ? "opacity-100 translate-x-10" : "opacity-0"}`}>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-[24px] font-bold'>Find Calm: Reserve Your Relaxing Massage Now</h3>
                    <p className='text-left text-[16px]'>"Welcome to our tranquil sanctuary, where relaxation awaits. Our expert therapists offer personalized treatments to melt away stress and tension. Book your appointment now for a rejuvenating experience."</p>
                </div>
                <Image src={"/img/massage1.jpg"} alt={"massagePicture"} width={960} height={600} className='rounded-[100px]'/>
            </div>
        </section>
    );
}