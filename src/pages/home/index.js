import { useRouter } from 'next/router'
import React from 'react'

const Home = () => {

    const Router = useRouter()

    const handleLogout = () => {
        Router.push('/')
    }

    return (
        <div className='flex flex-col items-center w-full h-screen justify-center relative'>

            <div className='w-full p-3 bg-[#121212] fixed top-0 left-0 flex items-center justify-between'>

                <p className='text-lg text-white font-semibold tracking-wide'>LOGO</p>


                <button onClick={handleLogout} className='text-sm text-white'>
                    Logout
                </button>

            </div>

            <p className='lg:text-base text-sm'>Hello, User</p>

        </div>
    )
}

export default Home