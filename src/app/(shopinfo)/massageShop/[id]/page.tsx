import getMassage from "@/libs/getMassage"
import ProductCardDetail from "@/components/ProductCardDetail";

export default async function MassageDetailPage( {params} : { params: {id:string}} ) {
    
    const massageShopDetail = await getMassage(params.id);

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
        </main>
    )
}
/*
export async function generateStaticParams() {
    return [{cid:'001'}, {cid:'002'}, {cid:'003'}, {cid:'004'}]
}

<ProductCard massageShopName={massageShopItem.name}
                                    massageShopAddress={massageShopItem.address}
                                    imgSrc='/img/massage2.jpg'
                                    massageShopRating={5}
                                    massageShopId={massageShopItem.id}/>

<div className="flex mx-[60px] mt-[60px]">
    <div>
        <Image
            src={"/img/massage1.jpg"}
            alt="Image example"
            width={0}
            height={0}
            sizes="100vh"
            className="w-[1200px] h-[500px] rounded-[20px] object-fit"
        ></Image>
    </div>
    <div className="w-[540px] h-[720px] ml-[60px] border-2 border-[#EEEEEE] rounded-xl px-[30px]">
        <h1 className="text-5xl text-center mt-5 font-weight: 700">
            Reservation
        </h1>
        <h2 className="text-2xl text-center mt-2 font-weight: 700">
            {massageShopDetail.name}
        </h2>
        <form>
            <div className="mt-5 mb-4">
                <h2 className="text-xl">Name</h2>
            </div>
            <div className="mb-4">
                <h2 className="text-xl">Email</h2>
            </div>
            <div className="mb-4">
                <h2 className="text-xl">Phone number</h2>
            </div>
            <br />
            <div className="flex justify-center mt-4">
                
            </div>
        </form>
    </div>
</div>
*/