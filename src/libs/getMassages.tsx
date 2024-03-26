export default async function getMassages() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/massageShops`);
    
    if(!response.ok) {
        throw new Error("Failed to fetch massageShops")
    }

    return await response.json()
}