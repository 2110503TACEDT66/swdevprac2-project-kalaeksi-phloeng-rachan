export async function getReviews(id:string, token:string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/MassageShops/${id}/reviews`,{
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    if(!response.ok) {
        throw new Error("Failed to fetch reservation")
    }

    return await response.json()
}