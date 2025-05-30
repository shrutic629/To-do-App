import React from 'react'

const UpcomingTask = () => {
  return (
    <div className='w-[97%] mx-auto'>
        <h1 className='text-2xl font-semibold py-6'>Upcoming Tasks</h1>
        <div>
            <h3 className='text-lg pb-3'>Shopping List</h3>
            <div className='flex border-2 w-1/4 justify-between p-2 rounded-md'>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <h5>To-do 1</h5>
                </div>
                <div>
                    <h4>Today</h4>
                </div>
            </div>
            <div className='flex border-2 w-1/4 justify-between p-2 rounded-md'>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <h5>To-do 1</h5>
                </div>
                <div>
                    <h4>Today</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpcomingTask