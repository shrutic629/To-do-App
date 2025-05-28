import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ConfirmOtp = () => {
  return (
    <div>
        <div className='border-2 w-3/12 mx-auto border-blue-400 px-4 py-12 rounded-md mt-14'>
                <div className='mt-4'>
                    <div className='mt-4'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full'/>
                    </div>
                    <div className='mt-4'>
                    <TextField id="outlined-basic" label="Otp" variant="outlined" className='w-full'/>
                    </div>
                </div>
                <div className='mt-6 text-center'>
                <Button variant="contained">Submit</Button>
                </div>
        </div>
    </div>
  )
}

export default ConfirmOtp