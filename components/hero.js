import Image from 'next/image'
import React from 'react'
import phone from '@/app/static/phone.png'
import stairs from '@/app/static/stair.png'
import pillar from '@/app/static/pillar.png'
import cubes from '@/app/static/cubes.png'
import cube from '@/app/static/cube.png'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='text-[200px] font-pop font-extrabold -mb-20 p-0'>CASH</p>
        <Image 
          src={phone} 
          alt='phone logo' 
          className='w-96 absolute z-10'
        />
        <Image 
          src={stairs} 
          alt='stairs' 
          className='absolute w-2/12 top-24 right-[19%]'
        />
        <Image 
          src={pillar} 
          alt='stairs' 
          className='absolute w-2/12 bottom-px right-[22%] z-10'
        />
        <Image 
          src={cubes} 
          alt='stairs' 
          className='absolute w-2/12 bottom-[7%] left-[7%] z-10'
        />
        <Image 
          src={cube} 
          alt='stairs' 
          className='absolute w-[7%] top-[10%] left-[15%] z-10'
        />
        <p 
          className='text-[200px] font-pop font-extrabold -mt-16 p-0 z-20'
        >
          APP
        </p>
    </div>
  )
}

export default Hero