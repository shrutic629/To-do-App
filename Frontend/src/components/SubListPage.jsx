import React from 'react'

const SubListPage = () => {
  return (
    <div className='w-[97%] mx-auto mt-9'>
        <h1 className='mb-7 text-2xl font-semibold'>Shopping List</h1>
        <div>
            <div className='flex border-2 w-1/4 p-2 rounded-md justify-between mb-2'>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <h2>To-do 1</h2>
                </div>
                <div>
                    <h3>date</h3>
                </div>
            </div>
            <div className='flex border-2 w-1/4 p-2 rounded-md justify-between mb-2'>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <h2>To-do 2</h2>
                </div>
                <div>
                    <h3>date</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubListPage