import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const [email,setEmail] = useState("")
  const [error,setError] = useState({})

  const navigate = useNavigate()

  const validateInput = ()=>{
    const newError = {}

    if(!email.trim()){
      newError.email = 'Email is required'
    }
    else if(!/\S+@\S+\.\S+/.test(email)){
      newError.email = 'Invalid Email'
    }
    setError(newError)
    return Object.keys(newError).length === 0
  }

  const submitHandler = async()=>{
    try{
      if(validateInput()){
        const response = await axios.post(`http://localhost:3000/api/auth/forgot-password`,{
          email:email
        })
        console.log(response)
        navigate('/confirm-password') 
      }
      
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div className='bg-gradient-to-r from-emerald-300 to-cyan-300 ... h-screen pt-14'>
      <div className='border-2 w-3/12 mx-auto border-slate-400 px-4 py-12 rounded-lg bg-slate-100 mt-14'>
        <div className='mt-4'>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
          {error.email && <span className='text-red-500'>{error.email}</span>}
          </div>
        </div>
        <div className='mt-6 text-center'>
            <Button variant="contained" type="submit" onClick={submitHandler} sx={{ backgroundColor: '#2dd4bf', '&:hover': { backgroundColor: '#14b8a6' } }}>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword