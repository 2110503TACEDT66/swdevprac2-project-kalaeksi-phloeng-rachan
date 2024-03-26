import Banner from '@/components/Banner'
import { TravelCard } from '@/components/TravelCard'
import Image from 'next/image'
import Link from 'next/link'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'

export default function Home() {
  return (
    <main>
      <section className='text-center h-[1000px] pt-[100px]'>
        <h1 className='text-5xl font-bold'>Reserve Your Massage Experience Today!</h1>
        <h3 className='mt-4 text-md'>Explore massage shops, pick the place you like, book it and enjoy your massage experience</h3>
        <Banner/>
      </section>
      <Section1/>
      <Section2/>
      <section className='text-center h-[600px] bg-[url("/img/christin-hume-0MoF-Fe0w0A-unsplash.jpg")] bg-cover'>
        <Link href={"/massageShop"}>
          <button className='h-[100px] mt-[240px] px-10 rounded-[20px] text-white text-[36px] font-bold bg-yellow-sour'>Go to shop</button>
        </Link>
      </section>
    </main>
  )
}
