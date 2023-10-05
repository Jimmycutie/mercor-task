import Image from 'next/image'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col box-border items-center justify-between p-10 bg-laser bg-contain bg-no-repeat">
      <Nav/>
      <Hero />
      <Footer />
    </main>
  )
}
