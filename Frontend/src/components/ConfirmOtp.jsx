import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const ConfirmOtp = () => {
  const [email, setEmail] = useState(" ")
  const [otp, setOtp] = useState(" ")

  const submitHandler = async(e)=>{
      e.preventDefault()
      try{
          const response = await axios.post(`http://localhost:3000/api/auth/confirm-otp`,{
            email:email,
            otp:otp
          })
          console.log("response",response)
      }
      catch(err){
        console.log(err)
      }
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
        <div className='border-2 w-3/12 mx-auto border-blue-400 px-4 py-12 rounded-md mt-14'>
                <div className='mt-4'>
                    <div className='mt-4'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className='mt-4'>
                    <TextField id="outlined-basic" label="Otp" variant="outlined" className='w-full' onChange={(e)=>{setOtp(e.target.value)}}/>
                    </div>
                </div>
                <div className='mt-6 text-center'>
                <Button variant="contained" type="submit">Submit</Button>
                </div>
        </div>
        </form>
    </div>
  )
}

export default ConfirmOtp