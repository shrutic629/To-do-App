import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
  const [name,setName] = useState(" ");
  const [email,setEmail] = useState(" ");
  const [password,setPassword] = useState(" ");


  function SubmitHandler(e){
        e.preventDefault()
        // const response = 
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

        <h2 className='mt-5'>Already have an account? <span className='text-blue-700'>login</span></h2>
      </div>
    </div>
  )
}

export default Signup