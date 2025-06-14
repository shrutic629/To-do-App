import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const SubListPage = () => {
  const [listName, setlistName] = useState(['']);
  const inputRef = useRef(null);

  const { todoListid } = useParams()

  // ✅ Only focus if the last line is empty (i.e., just added)
  useEffect(() => {
    if (listName[listName.length - 1] === '') {
      inputRef.current?.focus();
    }
  }, [listName]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setlistName([...listName, '']);
    } else if (e.key === 'Backspace') {
      if (listName[index] === '' && listName.length > 1) {
        const updated = [...listName];
        updated.splice(index, 1);
        setlistName(updated);
      }
    }
  };

  const handleChange = (e, index) => {
    const updatedLines = [...listName];
    updatedLines[index] = e.target.value;
    setlistName(updatedLines);
  };


  const savesubList = async()=>{
    const response = await axios.post(`http://localhost:3000/api/sub-todo/to-doList/${todoListid}/createSubList`,listName)
    console.log(response)
  }

  return (
    <div className='w-[97%] mx-auto mt-9'>
      <h1 className='mb-7 text-2xl font-semibold'>Shopping List</h1>

      <div className="w-11/12 mx-auto mt-8 bg-gray-100 p-4 rounded-md border border-gray-300 font-mono">
        {listName.map((line, index) => (
          <div key={index} className="flex items-center text-base mb-2">
            <input type="checkbox" className="mr-5 w-4 h-4" />

            <input
              ref={index === listName.length - 1 ? inputRef : null}
              value={line}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        ))}
      </div>
      <div className='mt-7 border-2 place-self-end mr-10 '>
        <Button variant="contained" onClick={savesubList}>Save</Button>
      </div>
    </div>
  );
};

export default SubListPage;
