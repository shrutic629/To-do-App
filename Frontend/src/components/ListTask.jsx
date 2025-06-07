import {useState,useEffect} from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ListTask = () => {
    const [title,setTitle] = useState("")
    const [lists,setLists] = useState([])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveListFn = async()=>{
        try{
            const response = await axios.post(`http://localhost:3000/api/todo-list/createlist`,{title})
            // console.log(response)
            setOpen(false)
            toast('List created successfully')

        }
        catch(err){
            console.log(err)
        }
  }


  const showLists = async()=>{
    try{
        const response = await axios.get(`http://localhost:3000/api/todo-list/getalllist`)
        // console.log(response.data.lists)
        setLists(response.data.lists)
    }
    catch(err){
        console.log(err)
    }
  }

  console.log("lists",lists)

  useEffect(()=>{
    showLists()
  })
  

  return (
    <div className='w-[97%] mx-auto mt-9'>
        <h1 className='text-2xl font-semibold'>Lists</h1>

        <div className='mt-4 border-2 w-1/4 rounded-md bg-slate-100 px-2'>
            <Button onClick={handleOpen}>Add List</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField id="standard-basic" label="List Name" variant="standard" onChange={(e)=>{setTitle(e.target.value)}}/>
                    </Box>
                    <div className='mt-9 place-self-center'>
                    <Button variant="contained" onClick={saveListFn}>Save</Button>
                    </div>
                </Box>
            </Modal>
        </div>
        

        {
            lists ? lists.map((list)=>{
                return(
                    <div className='mt-9'>
                        <div className='flex w-1/4 border-2 justify-between p-3 rounded-md mb-3'>
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <h3>{list.title}</h3>
                            </div>
                            <div>
                                <Link to="/header-sidebar/sub-list">
                                    <ArrowLongRightIcon className="w-6 h-6 text-black" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
             : null
        }
        
        <ToastContainer position="top-right" type="success" />
    </div>
  )
}

export default ListTask