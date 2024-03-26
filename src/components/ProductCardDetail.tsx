import Image from 'next/image';
import { Rating } from '@mui/material';
import Link from 'next/link';

export default function ProductCardDetail ( { massageShopName, imgSrc, massageShopAddress, massageShopRating, massageShopId, massageShopTel, open, close } 
    : { massageShopName:string, imgSrc:string, massageShopAddress:string, massageShopRating:number, massageShopId:string, massageShopTel:string, open:string, close:string}) {

    const openTime = new Date(open);
    const closeTime = new Date(close);
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
                    <div className='text-left pl-[50px]'>tel. {massageShopTel}</div>
                    <div className='text-left pl-[50px]'>open {openTime.toString()}</div>
                    <div className='text-left pl-[50px]'>close {closeTime.toString()}</div>
                    <Rating className='ml-[60px] mb-[60px]' size='large' value={massageShopRating} readOnly/>
                </div>
                <Link href={`/massageShop/${massageShopId}/reservations`}>
                <button className='bg-pink-sweet w-[150px] h-[40px] rounded-[20px] text-[18px] font-bold relative right-[20px] top-[240px]'>
                    Reserve now
                </button>
                </Link>
            </div>
        </div>
    );
}