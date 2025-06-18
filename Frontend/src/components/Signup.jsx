import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name,setName] = useState(" ");
  const [email,setEmail] = useState(" ");
  const [password,setPassword] = useState(" ");
  const [errors, setErrors] = useState({});
  const [image,setImage] = useState(null)
  const [imagePreview,setImagePreview] = useState(null)

  const navigate = useNavigate()

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if(!password.trim()){
      newErrors.password = 'Password is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function SubmitHandler(e){
        e.preventDefault()
        try{
          if(validateForm()){
            const response = await axios.post(`http://localhost:3000/api/auth/signup`,
              {
                name:name,
                email:email,
                password:password,
                image:image
              }
            )
            console.log("response",response.data)
            navigate('/confirm-otp')
          }
          
        }
        catch(error){
          console.log(error)
        }
  }

  const handleFilechange = (e)=>{
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl) 
    }
  }
  

  return (
    <div className='bg-gradient-to-r from-emerald-300 to-cyan-300 ... h-screen pt-14'>
      <div className='border-2 w-3/12 mx-auto border-slate-400 px-4 py-6 rounded-lg bg-slate-100'>
        <h1 className='text-4xl text-center font-bold text-black '>Sign up</h1>

        <form onSubmit={SubmitHandler}>
          <div className='mt-4'>
          <div>
            <div className=' flex-col items-center justify-center'>
              <div className='border-2 w-4/12 h-28'>
                  {
                    imagePreview && <img src={imagePreview} alt="" className='h-full w-full'/>
                  }
              </div>
                <label className="cursor-pointer text-blue-600">
                  Upload Image
                  <input type="file" className='hidden' onChange={handleFilechange}/>
                </label>
            </div>
          </div>
            <div className='mt-4'>
              <TextField id="outlined-basic" label="Name" variant="outlined" className='w-full' onChange={(e)=>{setName(e.target.value)}}/>
              {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </div>
            <div className='mt-4'>
              <TextField id="outlined-basic" label="Email" variant="outlined" className='w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div className='mt-4'>
              <TextField id="outlined-basic" label="Password" variant="outlined" className='w-full' onChange={(e)=>{setPassword(e.target.value)}}/>
              {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
          </div>
          <div className='mt-6 text-center '>
            <Button variant="contained" type="submit" sx={{ backgroundColor: '#2dd4bf', '&:hover': { backgroundColor: '#14b8a6' } }}>Sign up</Button>
          </div>
        </form>

        <h2 className='mt-5'>Already have an account? <Link to='/login' className='text-blue-700'>login</Link> </h2>



        {/* <span className='text-blue-700'>login</span> */}
        
      </div>
    </div>
  )
}

export default Signup