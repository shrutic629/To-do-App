import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmOtp = () => {
  const [email, setEmail] = useState(" ")
  const [otp, setOtp] = useState(" ")
  const [error,setError] = useState({})

  const navigate = useNavigate()

  const validateInput = ()=>{
    let newErrors = {}
    if(!otp.trim()){
      newErrors.otp = 'otp is required'
    }
    if(!email.trim()){
      newErrors.email = 'Email is required'
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      newErrors.email = 'Invalid email format'
    }
    
    setError(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const submitHandler = async(e)=>{
      e.preventDefault()
      try{
        if(validateInput()){
          const response = await axios.post(`http://localhost:3000/api/auth/confirm-otp`,{
            email:email,
            otp:otp
          })
          console.log("response",response)
          navigate('/login')
        }
          
      }
      catch(err){
        console.log(err)
      }
  }

  return (
    <div className='bg-gradient-to-r from-emerald-300 to-cyan-300 ... h-screen pt-14'>
    <form onSubmit={submitHandler}>
        <div className='border-2 w-3/12 mx-auto border-slate-400 px-4 py-12 rounded-lg mt-14 bg-slate-100'>
                <h1 className='font-semibold text-xl pb-6'>Confirm your otp</h1>
                <div className='mt-4'>
                    <div className='mt-4'>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
                    {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
                    </div>
                    <div className='mt-4'>
                    <TextField id="outlined-basic" label="Otp" variant="outlined" className='w-full' onChange={(e)=>{setOtp(e.target.value)}}/>
                    {error.otp && <span style={{ color: 'red' }}>{error.otp}</span>}
                    </div>
                </div>
                <div className='mt-6 text-center'>
                  <Button variant="contained" type="submit" sx={{ backgroundColor: '#2dd4bf', '&:hover': { backgroundColor: '#14b8a6' } }}>Submit</Button>
                </div>
        </div>
        </form>
    </div>
  )
}

export default ConfirmOtp