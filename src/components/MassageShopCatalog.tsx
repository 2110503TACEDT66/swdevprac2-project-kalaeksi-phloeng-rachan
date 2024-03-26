import ProductCard from "./ProductCard"

export default function MassageShopCatalog({massageShopJson}: {massageShopJson: MassageShopJson}) {
    const massageShopJsonReady = massageShopJson;
    return (
        <div>
            <h3 className="text-md mt-[10px]">Explore {massageShopJsonReady.count} massage shops in our catalog</h3>
            <div className="flex flex-col items-center">
                {
                    massageShopJsonReady.data.map((massageShopItem: MassageShopItem)=>(
                        <ProductCard massageShopName={massageShopItem.name}
                                    massageShopAddress={massageShopItem.address}
                                    imgSrc={massageShopItem.picture}
                                    massageShopRating={5}
                                    massageShopId={massageShopItem.id}/>
                    ))
                }
            </div>
        </div>
    )
}
/*<ProductCard massageShopName={massageShopItem.name}
                                    massageShopAddress={massageShopItem.address}
                                    imgSrc={massageShopItem.name}
                                    massageShopRating={5}
                                    massageShopId={massageShopItem.id}/> */