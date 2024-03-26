export default async function getMassage(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/massageShops/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch massageShop")
    }

    return await response.json()
}