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
                        <NavLink to='/three' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Three Project - Create a form that takes user input and displays it in real-time.</NavLink>
                        <NavLink to='/four' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Four Project - "How to create a counter using React where the user can increment, decrement and reset the count?"</NavLink>
                        <NavLink to='/five' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Five Project - "How to manipulate state in one component using React and pass that state as props to another component?"</NavLink>
                        <NavLink to='/six' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Six Project - "How to highlight elements in a list under certain conditions in React and use buttons to control that highlighting process?"</NavLink>
                        <NavLink to='/seven' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Seven Project - "Given an employee data. List out the employee details on DOM. Then upon click of a button “Highlight Employees”, add a border to the employee details who have more than 5 years of experience?"</NavLink>
                        <NavLink to='/eight' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Eight Project - "How to add the values ​​of two input fields using React and show the result?"</NavLink>
                        <NavLink to='/nine' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Nine Project - "How to display, update, and remove JSON data loaded in React, as well as toggle visibility of data using conditional rendering?"</NavLink>
                        <NavLink to='/ten' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Ten Project - "Multiple states to one state handling"</NavLink>
                        <NavLink to='/eleven' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Eleven Project - "How to manage object state in React and change the visual style and values ​​displayed in the UI by changing the state with the click of a button?"</NavLink>
                        <NavLink to='/search_input' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Twelve Project - "In React, how to search for data from a list by a user-supplied value from an input field and display that data in the UI, with an indication if the data is not found?"</NavLink>
                        <NavLink to='/display_item' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Thirteen Project - "Build a list component to display a list of items."</NavLink>
                        <NavLink to='/toggle_switch' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Implement a basic toggle switch component."</NavLink>
                        <NavLink to='/fetches_data' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Fifteen Project - "Create a component that fetches data from an API and displays it."</NavLink>
                        <NavLink to='/counts_down' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Sixteen Project - "Build a timer that counts down from a specified time."</NavLink>
                        <NavLink to='/to_do' className="relative inline-block bg-white my-2 p-4 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">Seventeen Project - "Implement a simple to-do list application with add and remove functionality."</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home