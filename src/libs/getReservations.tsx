export default async function getReservations() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/reservations`)
    if(!response.ok) {
        throw new Error("Failed to fetch car")
    }

    return await response.json()
}