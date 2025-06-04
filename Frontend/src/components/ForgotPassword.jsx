import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const [email,setEmail] = useState("")

  const submitHandler = async()=>{
    try{
      const response = await axios.post(`http://localhost:3000/api/auth/forgot-password`,{
        email:email
      })
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div>
      <div className='border-2 w-3/12 mx-auto border-blue-400 px-4 py-12 rounded-md mt-14'>
        <div className='mt-4'>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
        </div>
        <div className='mt-6 text-center'>
          <Link to="/confirm-password">
            <Button variant="contained" type="submit" onClick={submitHandler} >Submit</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword