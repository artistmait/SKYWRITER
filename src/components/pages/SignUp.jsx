import React from 'react'

const SignUpPage = () => {
  return (
   <div className='bg-white'>
        <div className='w-auto rounded-2xl bg-gray-200 flex justify-center items-center h-screen gap-5 p-15 outline-yellow-800'>
            <div className='flex flex-col items-center justify-center gap-15 bg-white p-25 rounded-lg'>
            <h3 className='font-semibold gap-4 text-5xl font-display text-yellow-700'>LOGIN PAGE</h3>
            <input type="text" placeholder='Please enter Username' className='w-100 font-display rounded-2xl bg-gray-200 text-gray-900 h-[50px] m-2 p-4'></input>
            <input type="text" placeholder='Please enter Email' className='w-100 font-display rounded-2xl bg-gray-200 text-gray-900 h-[50px] m-2 p-4'></input>
            <input type="text" placeholder='Please enter Password' className='w-100 font-display rounded-2xl bg-gray-200 text-gray-900 h-[50px] m-2 p-4'></input>
            <input type="text" placeholder='Please confirm the Password' className='w-100 font-display rounded-2xl bg-gray-200 text-gray-900 h-[50px] m-2 p-4'></input>

            {/* <input type="text" placeholder=''></input> */}
            <button type="submit" className='w-45 h-15 font-display bg-black text-white text-xl font-bold p-2.5 rounded-full'>SIGNUP</button>
            <p className='text-gray-700 font-display'>Already having an account? LOGIN</p>
            </div>
        
        </div>
    </div>
  )
}

export default SignUpPage