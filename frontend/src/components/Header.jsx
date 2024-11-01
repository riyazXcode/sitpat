import React from 'react'
import { CircleUser } from 'lucide-react';

const Header = () => {
    return (
        <div className='block bg-main-cyan-green h-[8%]'>
            <div className='flex flex-row-reverse h-full w-full pr-2'>
                <button className='right-0'>
                    <CircleUser size={40} color='white' b/>
                </button>
            </div>
        </div>
    )
}
export default Header
