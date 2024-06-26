export default async function getUserProfile(token:string) {

    const response = await fetch(`https://presentation-day-1-kalaeksi-phloeng-rachan.vercel.app/api/auth/me`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        }
    })

    if(!response.ok) {
        throw new Error("Cannot get user profile")
    }

    return await response.json()
}