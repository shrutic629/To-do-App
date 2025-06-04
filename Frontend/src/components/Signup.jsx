import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name,setName] = useState(" ");
  const [email,setEmail] = useState(" ");
  const [password,setPassword] = useState(" ");

  const navigate = useNavigate()


  async function SubmitHandler(e){
        e.preventDefault()
        try{
          const response = await axios.post(`http://localhost:3000/api/auth/signup`,
            {
              name:name,
              email:email,
              password:password
            }
          )
          console.log("response",response.data)
          navigate('/confirm-otp')
        }
        catch(error){
          console.log(error)
        }
  }
  

  return (
    <div>
      <div className='border-2 w-3/12 mx-auto border-blue-400 px-4 py-12 rounded-md mt-14'>
        <h1 className='text-4xl text-center font-bold text-blue-700 pb-4ss'>Signup</h1>

        <form onSubmit={SubmitHandler}>
          <div className='mt-4'>
            <div className='mt-4'>
            <TextField id="outlined-basic" label="Name" variant="outlined" className='w-full' onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className='mt-4'>
            <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className='mt-4'>
            <TextField id="outlined-basic" label="Password" variant="outlined" className='w-full' onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
          </div>
          <div className='mt-6 text-center'>
            <Button variant="contained" type="submit">SignUp</Button>
          </div>
        </form>

        <h2 className='mt-5'>Already have an account? <Link to='/login' className='text-blue-700'>login</Link> </h2>



        {/* <span className='text-blue-700'>login</span> */}
        
      </div>
    </div>
  )
}

export default Signup