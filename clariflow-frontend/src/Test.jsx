// File to test the connection between frontend and backend

import React from 'react'
import { useState, useEffect } from 'react'

const Test = () => {
    const [message, setMessage] = useState('');

    useEffect(()=>{
        fetch('http://localhost:3001/api/message')
        .then((res)=>res.json())
        .then((data)=>setMessage(data.message))
        .catch((err)=>console.error("Failed to fetch message:", err));
    }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-blue-600">
        Testing the connections
      </h1>
      <p className="mt-4 text-xl">
        {message || "Loading message from server..."}
      </p>
    </div>
  )
}

export default Test