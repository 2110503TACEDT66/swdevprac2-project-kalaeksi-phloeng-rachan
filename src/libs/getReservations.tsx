export default async function getReservations() {
    const response = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/api/reservations`)
    if(!response.ok) {
        throw new Error("Failed to fetch car")
    }

    return await response.json()
}