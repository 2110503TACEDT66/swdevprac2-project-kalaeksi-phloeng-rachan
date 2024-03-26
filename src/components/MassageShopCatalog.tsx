import ProductCard from "./ProductCard"

export default async function MassageShopCatalog({massageShopJson}: {massageShopJson: MassageShopJson}) {
    const massageShopJsonReady = await massageShopJson;
    return (
        <div>
            <h3 className="text-md mt-[10px]">Explore {massageShopJsonReady.count} massage shops in our catalog</h3>
            <div className="flex flex-col items-center">
                {
                    massageShopJsonReady.data.map((massageShopItem: MassageShopItem)=>(
                        <ProductCard massageShopName={massageShopItem.name}
                                    massageShopAddress={massageShopItem.address}
                                    imgSrc="/img/massage1.jpg"
                                    massageShopRating={5}
                                    massageShopId={massageShopItem.id}/>
                    ))
                }
            </div>
        </div>
    )
}