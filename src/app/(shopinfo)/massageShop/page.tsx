import getMassages from "@/libs/getMassages"
import MassageShopCatalog from "@/components/MassageShopCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default async function MassageShop() {
    const massageShops = await getMassages()
    
    return (
        <main className="text-center p-5">
            <h1 className="text-5xl font-bold">Massage Shops</h1>
            <Suspense fallback={ <p>Loading ...</p> }>
            <MassageShopCatalog massageShopJson={massageShops}/>
            </Suspense>
        </main>
    )
}