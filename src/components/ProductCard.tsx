import Image from 'next/image';
import { Rating } from '@mui/material';
import Link from 'next/link';

export default function ProductCard ( { massageShopName, imgSrc, massageShopAddress, massageShopRating, massageShopId } 
    : { massageShopName:string, imgSrc:string, massageShopAddress:string, massageShopRating:number, massageShopId:string}) {

    return (
        <div className='flex flex-row w-[1440px] h-[300px] px-[200px] mt-5'>
            <Image className="rounded-[30px] mr-5" src={imgSrc} alt="productCard" width={480} height={300}/>
            <div className='flex flex-row border-solid border-white border-2 rounded-[30px]'>
                <div className='flex flex-col w-[540px] justify-between'>
                    <h4 className='text-left text-[36px] pl-[40px] mt-[60px] font-bold'>{massageShopName}</h4>
                    <div className='flex flex-row pl-[40px]'>
                        <Image src="/location.svg" width={30} height={30} alt="locationSvg"/>
                        <p className='text-left pl-[20px]'>{massageShopAddress}</p>
                    </div>
                    
                    <Rating className='ml-[60px] mb-[60px]' size='large' value={massageShopRating} readOnly/>
                </div>
                <Link href={`/massageShop/${massageShopId}`}>
                <button className='bg-pink-sweet w-[150px] h-[40px] rounded-[20px] text-[18px] font-bold relative right-[20px] top-[240px]'>
                    Reserve now
                </button>
                </Link>
            </div>
        </div>
    );
}