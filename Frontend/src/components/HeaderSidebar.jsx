import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HeaderSidebar = () => {
  return (
    <div>
        <div className='min-h-screen flex flex-col '>
            <div className='border-2 px-9 py-6 flex items-center bg-gradient-to-r from-emerald-300 to-cyan-300 ...'>
                <div className=' w-2/4 text-3xl font-bold'>To-do App</div>
                <div className=' w-2/4 flex place-content-end'>
                    <div className='h-10 w-10 border-2 rounded-3xl'></div>
                    <h1 className='text-lg pl-3'>Rajdeep</h1>
                </div>
            </div>
            
            <div className='flex flex-1'>
                <div className='w-1/5 border-2 bg-gradient-to-r from-emerald-300 to-cyan-300 ... '>
                    <div className='border-2 py-3 pl-9 text-xl place-self-center w-full'>Home</div>
                    <Link to="/header-sidebar/list">
                        <div className='border-2 py-3 pl-9 text-xl place-self-center w-full'>Lists</div>
                    </Link>
                </div>
                <div className='w-4/5 border-2 bg-slate-100'>
                    <Outlet/>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default HeaderSidebar