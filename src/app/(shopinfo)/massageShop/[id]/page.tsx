import getMassage from "@/libs/getMassage"
import ProductCardDetail from "@/components/ProductCardDetail";
import { getReviews } from "@/libs/getReviews";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import { Rating } from "@mui/material";

export default async function MassageDetailPage( {params} : { params: {id:string}} ) {
    
    const massageShopDetail = await getMassage(params.id);

    const session = await getServerSession(authOptions);

    if(session){
        var ReviewContent = await getReviews(params.id, session.user.token);
        console.log(ReviewContent)
    }


    return(
        <main className="p-5">
            <div className="flex flex-col items-center">
                <ProductCardDetail massageShopName={massageShopDetail.massageShop.name}
                                        massageShopAddress={massageShopDetail.massageShop.address}
                                        imgSrc='/img/massage2.jpg'
                                        massageShopRating={5}
                                        massageShopId={massageShopDetail.massageShop.id}
                                        massageShopTel={massageShopDetail.massageShop.tel}
                                        open={massageShopDetail.massageShop.open}
                                        close={massageShopDetail.massageShop.close}/>
            </div>
            <div className="w-[1440px] h-fit bg-[#3A4750] m-auto mt-5">
                {session? 
                ReviewContent.data.map((item:ReviewItem) => (
                    <div className="flex p-5">
                        <Image src={"/img/pastamania.png"} width={0} height={0} sizes="100vh" alt="pasta" className="w-[120px] h-[120px] rounded-[120px]">
                        </Image>
                        <div className="block ml-5">
                            <div className="text-4xl">
                                {item.user.name}
                            </div>
                            <Rating
                                name="read-only"
                                value={item.reviewPoint}
                            />
                            <div className="text-2xl">
                                {item.comment}
                            </div>
                        </div>
                    </div>
                )): ""
            }
            </div>
        </main>
    )
}
