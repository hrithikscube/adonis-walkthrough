import Input from '@/components/Input'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import axiosInstance from './utils/axios'

const Home = () => {

  const [params, setParams] = useState({
    email: '',
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
    if (params.name !== '' && params.password !== '') {
      axiosInstance.post('/login', params)
        .then((response) => {
          let data = response.data
          localStorage.setItem('auth_details', JSON.stringify(data))
          Router.push('/home')
          setParams({
            email: '',
            password: ''
          })
        })
        .catch((error) => {
          console.log(error)
          // alert('Something went wrong')
        })
    }
    else {
      alert('Enter valid credentials')
    }
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-[#f2f2f2] md:px-0 px-4'>

      <div className='w-full md:w-96 mx-auto flex flex-col gap-3 bg-white lg:p-6 p-4 shadow'>

        <p className='lg:text-lg text-base font-semibold text-[#121212]'>Login</p>

        <Input
          name="email"
          value={params.email}
          handleChange={handleChange}
          label='Enter Email'
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