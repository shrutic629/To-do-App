import React, { useState, useRef, useEffect } from 'react';

const SubListPage = () => {
  const [lines, setLines] = useState(['']);
  const inputRef = useRef(null);

  // ✅ Only focus if the last line is empty (i.e., just added)
  useEffect(() => {
    if (lines[lines.length - 1] === '') {
      inputRef.current?.focus();
    }
  }, [lines]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setLines([...lines, '']);
    } else if (e.key === 'Backspace') {
      if (lines[index] === '' && lines.length > 1) {
        const updated = [...lines];
        updated.splice(index, 1);
        setLines(updated);
      }
    }
  };

  const handleChange = (e, index) => {
    const updatedLines = [...lines];
    updatedLines[index] = e.target.value;
    setLines(updatedLines);
  };

  return (
    <div className='w-[97%] mx-auto mt-9'>
      <h1 className='mb-7 text-2xl font-semibold'>Shopping List</h1>

      <div className="w-11/12 mx-auto mt-8 bg-gray-100 p-4 rounded-md border border-gray-300 font-mono">
        {lines.map((line, index) => (
          <div key={index} className="flex items-center text-base mb-2">
            <input type="checkbox" className="mr-5 w-4 h-4" />

            <input
              ref={index === lines.length - 1 ? inputRef : null}
              value={line}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubListPage;
