import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
  const [data,setData] = useState({
    email: "",
    password:""
  })
  const [errors,setErrors] = useState({})

  const navigate = useNavigate()

  const validateInput = ()=>{
    const newErrors = {};

    if(!data.password.trim()){
      newErrors.password = 'Password is required'
    }
    if(!data.email.trim()){
      newErrors.email = 'Email is required'
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)){
      newErrors.email = 'Invalid Email'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    try{
      if(validateInput()){
        const response = await axios.post(`http://localhost:3000/api/auth/login`,data)
        console.log(response)
        navigate('/header-sidebar/home')
      }
      // console.log(data)
      
    }
    catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className='bg-gradient-to-r from-emerald-300 to-cyan-300 ... h-screen pt-14'>
    <form onSubmit={submitHandler}>
      <div className='border-2 w-3/12 mx-auto border-slate-400 px-4 py-12 rounded-lg bg-slate-100 mt-14'>
        <h1 className='text-4xl text-center font-bold text-blue-700 pb-4ss'>Login</h1>
        <div className='mt-4'>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Email" variant="outlined" name="email" value={data.email} className='w-full' onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
          {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </div>
          <div className='mt-4'>
          <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={data.password} className='w-full' onChange={(e)=>{setData({...data,[e.target.name]:e.target.value})}}/>
          {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>
        </div>  
        <div className='mt-6 text-center'>
            <Button variant="contained" type="submit" sx={{ backgroundColor: '#2dd4bf', '&:hover': { backgroundColor: '#14b8a6' } }}>Login</Button>
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