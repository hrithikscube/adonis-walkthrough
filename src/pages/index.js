import Input from '@/components/Input'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Home = () => {

  const [params, setParams] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setParams({
      ...params,
      [name]: value
    })
  }

  const Router = useRouter()

  const handleSubmit = () => {
    // validate and make api call
    Router.push('/home')
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#f2f2f2]'>

      <div className='w-96 mx-auto flex flex-col gap-3 bg-white lg:p-6 p-4 shadow rounded-xl border border-[#808080]/20'>

        <p className='lg:text-lg text-base font-semibold text-[#121212]'>Login</p>

        <Input
          name="username"
          value={params.username}
          handleChange={handleChange}
          label='Enter Username'
        />

        <Input
          type="password"
          name="password"
          value={params.password}
          handleChange={handleChange}
          label='Enter Password'
        />

        <button onClick={handleSubmit} className='text-white text-sm p-3 bg-[#121212] rounded-md w-full'>
          Login
        </button>

      </div>

    </div>
  )
}

export default Home