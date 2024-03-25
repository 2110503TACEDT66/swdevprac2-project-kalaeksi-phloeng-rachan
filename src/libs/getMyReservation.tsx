export default async function getMyReservation(token:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/reservations`,{
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