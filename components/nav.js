import React from 'react'
import Image from 'next/image'
import logo from '../app/static/logo.png'
import eyebutton from '../app/static/eye button.png'

const Nav = () => {
    const menu = [
        'SIGN IN', 'LEGAL', 'LICENSES', 'SECURITY', 'CAREERS', 'PRESS', 'SUPPORT', 'STATUS', 'CODEBLOG'
    ]
    return (
        <nav className='flex flex-row justify-between w-full px-10 items-center'>
            <Image src={logo} alt='cashapp logo' className='h-11 w-8'/>
            <div className='flex flex-row gap-6'>
            {menu.map(item => {
                return(
                <p key={item} className='font-sans font-bold text-lg'>{item}</p>
                )
            })}
            </div>
            <Image src={eyebutton} alt='eye' className='h-9 w-16'/>
        </nav>
    )
}

export default Nav