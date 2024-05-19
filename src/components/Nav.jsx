import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='w-full h-16 md:h-[5vw] px-5 md:px-20 flex items-center justify-between fixed top-0 left-0 bg-zinc-300 z-30 backdrop-blur-md bg-zinc-600/10'>
            <div>
                <h1 className='hidden md:block text-2xl font-bold text-[#FC815F]'>Foodi</h1>
            </div>
            <div className='flex items-center gap-10'>
                <NavLink className={(e) => (e.isActive ? "text-[#FC815F]" : " ")} to="/">Home</NavLink>
                <NavLink className={(e) => (e.isActive ? "text-[#FC815F]" : " ")} to="/recipe">Recipe</NavLink>
                <NavLink className={(e) => (e.isActive ? "text-[#FC815F]" : " ")} to="/about">About Us</NavLink>
                <NavLink className={(e) => (e.isActive ? "text-[#FC815F]" : " ")} to="/contact">Contact</NavLink>
            </div>
            <div>
                <button className='hidden md:block px-6 rounded-full text-[#FC815F] py-1 border-2 border-[#FC815F]'>Login</button>
            </div>
        </div>
    )
}

export default Nav