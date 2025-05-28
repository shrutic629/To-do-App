import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <div>
      <div className='border-2 w-3/12 mx-auto border-blue-400 px-4 py-12 rounded-md mt-14'>
        <h1 className='text-4xl text-center font-bold text-blue-700 pb-4ss'>Login</h1>
        <div className='mt-4'>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full'/>
          </div>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Password" variant="outlined" className='w-full'/>
          </div>
        </div>
        <div className='mt-6 text-center'>
          <Button variant="contained">Login</Button>
        </div>
        <h2 className='mt-4'>Don't have an account? signup</h2>
      </div>
    </div>
  )
}

export default Login