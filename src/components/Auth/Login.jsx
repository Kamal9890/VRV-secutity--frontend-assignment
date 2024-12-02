import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
        handleLogin(email,password)

        setEmail("")
        setPassword("")
        

    }


    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20' >
                <form
                     onSubmit={(e)=>{
                        submitHandler(e)

                     }}
                
                className='flex flex-col items-center justify-center'>
                    <input
                     value={email}
                    onChange={(e)=>{
                       setEmail(e.target.value)
                    }}
                    
                    required className='outline-none border-2 bg-transparent border-emerald-600 font-medium text-lg  py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
                   
                   
                    <input 
                    value={password}
                    onChange={(e)=>{
                       setPassword(e.target.value)
                    }}
                    required className='outline-none border-2 bg-transparent border-emerald-600 font-medium text-lg  py-2 px-6 mt-3 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter Your Password' />
                    <button className=' text-white mt-7 outline-none border-none  hover:bg-emerald-700 text-lg font-semibold bg-emerald-600 py-2 px-8 rounded-full w-full placeholder:text-white'>Log in</button>
                </form>
            </div>

        </div>
    )
}

export default Login
