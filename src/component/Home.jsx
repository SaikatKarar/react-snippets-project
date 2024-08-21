import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <h1 className='text-center text-2xl font-bold text-sky-500 mb-2'>React Snippets Project</h1>
                    <div>
                        <NavLink to='/one' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">First Project - Create a simple "Hello World" React component.</NavLink>
                        <NavLink to='/two' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Second Project - Build a counter application with increment and decrement buttons.</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home