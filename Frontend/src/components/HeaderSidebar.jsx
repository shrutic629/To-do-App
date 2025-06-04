import React from 'react'
import { Outlet } from 'react-router-dom'

const HeaderSidebar = () => {
  return (
    <div>
        <div className='h-screen'>
            <div className='border-2 px-9 flex items-center h-[15%]'>
                <div className=' w-2/4 text-3xl font-bold'>To-do App</div>
                <div className=' w-2/4 flex place-content-end'>
                    <div className='h-10 w-10 border-2 rounded-3xl'></div>
                    <h1 className='text-lg pl-3'>Rajdeep</h1>
                </div>
            </div>
            
            <div className='flex h-full'>
                <div className='w-1/5 border-2 '>
                    <div className='border-2 py-3 pl-9 text-xl'>Home</div>
                    <div className='border-2 py-3 pl-9 text-xl'>Lists</div>
                </div>
                <div className='w-4/5 border-2 '>
                    <Outlet/>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default HeaderSidebar