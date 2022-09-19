import React from 'react'
import Oicon from './Oicon';
import Xicon from './Xicon';

function Start() {
  return (
    <div className='flex flex-col justify-center items-center w-fit'>
        <div className=' mb-6'>
            <Xicon color='blue' size='md'/>
            <Oicon color='yellow' size='md'/>
        </div>

        <div className='flex flex-col gap-6 items-center justify-center bg-bg-light rounded-lg p-8 shadow-lg shadow-bg-light'>
            <h1 className=' text-xl font-bold text-gray-dark'>Pick player 1'st mark</h1>
            <div className=' bg-bg-dark w-full h-fit rounded-lg flex justify-center items-center '>
                <span className='player--active  flex justify-center items-center w-1/2 h-full rounded-lg my-2 mx-2 py-4 px-2 cursor-pointer'>
                    <Xicon color={'dark'}/>
                </span>
                <span className='flex justify-center items-center w-1/2 rounded-lg py-4 px-2 cursor-pointer'>
                    <Oicon color={'light'}/>
                </span>
            </div>
            <p className='text-gray-600 font-semibold'>remember x goes first</p>
        </div>

        <div className='flex flex-col gap-7 mt-10 w-full'>
            <button className='btn-yellow'>NEW GAME (VS CPU)</button>
            <button className='btn-blue'>NEW GAME (VS PLAYER)</button>
        </div>
    </div>
  )
}

export default Start;