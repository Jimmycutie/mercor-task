import Image from 'next/image'
import React from 'react'
import apple from '@/app/static/apple.png'
import googleplay from '@/app/static/googleplay.png'
import arrow from '@/app/static/arrow.png'
import twitch from '@/app/static/twitch.png'
import twitter from '@/app/static/twitter.png'
import instagram from '@/app/static/instagram.png'

const Footer = () => {
    const apps = [
        {
            key: '1',
            icon: twitch
        }, 
        {
            key: '2',
            icon: twitter
        }, 
        {
            key: '3',
            icon: instagram
        }
    ]
  return (
    <div className='flex flex-row w-full px-5 items-center gap-6 z-20'>
        <>
            <button className='flex flex-row justify-center items-center w-48 h-14 bg-black p-2 border-[1px] rounded-lg'>
                <Image className='w-5 mr-5' src={apple}/>
                <p className='font-semibold'>APP STORE</p>
            </button>
            <button className='flex flex-row justify-center items-center w-48 h-14 bg-black p-2 border-[1px] rounded-lg'>
                <Image className='w-5 mr-5' src={googleplay}/>
                <p className='font-semibold'>GOOGLE PLAY</p>
            </button>
        </>
        <Image src={arrow} className='w-4 ml-auto mr-[11%] animate-bounce'/>
        <span className='text-[10px] w-[29%] text-[#B6B6B6]'>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. 
            Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. 
            Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
        </span>
        <div className='flex flex-row gap-6'>
            {
                apps.map(app => {
                    return(
                        <Image className='w-auto h-5' key={app.key} src={app.icon} alt='app logo'/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Footer