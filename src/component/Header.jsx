import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                <Link to='/' className='inline-flex items-center'>
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                        Home
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Header