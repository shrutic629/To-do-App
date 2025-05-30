import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const ListTask = () => {
  return (
    <div className='w-[97%] mx-auto mt-9'>
        <h1 className='text-2xl font-semibold'>Lists</h1>
        <div className='mt-5'>
        <div className='flex w-1/4 border-2 justify-between p-3 rounded-md mb-3'>
            <div>
                <input type="checkbox" />
            </div>
            <div>
                <h3>Shopping List</h3>
            </div>
            <div>
                <ArrowLongRightIcon className="w-6 h-6 text-black" />
            </div>
        </div>
        <div className='flex w-1/4 border-2 justify-between p-3 rounded-md mb-3'>
            <div>
                <input type="checkbox" />
            </div>
            <div>
                <h3>Gym</h3>
            </div>
            <div>
                <ArrowLongRightIcon className="w-6 h-6 text-black" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default ListTask