import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const ConfirmPassword = () => {
  const [data,setData] = useState({
    email:"",
    otp:"",
    password:""
  })

  const submitHandler = async(e)=>{
      e.preventDefault()
      try{
          const response = await axios.post(`http://localhost:3000/api/auth/confirm-password`,data)
          console.log(response)
      }
      catch(err){
        console.log(err)
      }
  }


  return (
    <div onSubmit={submitHandler}>
     <form>
        <div className='border-2 w-3/12 mx-auto border-blue-400 px-4 py-12 rounded-md mt-14'>
        <div className='mt-4'>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={data.email} className='w-full' onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
          </div>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Otp" variant="outlined" name="otp" value={data.otp} className='w-full' onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
          </div>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={data.password} className='w-full' onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
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

export default ConfirmPassword