import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Login = () => {
  const [data,setData] = useState({
    email: "",
    password:""
  })

  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      console.log(data)
      const response = await axios.post(`http://localhost:3000/api/auth/login`,data)
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
    
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
      <div className='border-2 w-3/12 mx-auto border-blue-400 px-4 py-12 rounded-md mt-14'>
        <h1 className='text-4xl text-center font-bold text-blue-700 pb-4ss'>Login</h1>
        <div className='mt-4'>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={data.email} className='w-full' onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
          </div>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={data.password} className='w-full' onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
          </div>
        </div>  
        <div className='mt-6 text-center'>
          <Link to="">
            <Button variant="contained" type="submit">Login</Button>
          </Link>
        </div>
        <h2 className='mt-4'>Don't have an account? <Link to="/" className='text-blue-700'>Signup</Link> </h2>
        <Link to="/forgot-password">
        <h2 className='text-blue-700'>Forgot Password</h2>
        </Link>
      </div>
    </form>
    </div>
  )
}

export default Login