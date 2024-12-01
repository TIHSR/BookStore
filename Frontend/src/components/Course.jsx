import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Courses from './Courses'
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
        useEffect(() => {
          const getBook = async () => { 
            try {
            const res = await axios.get("http://localhost:4001/book");
            console.log(res.data);
            setBook(res.data);
          } catch (error) {
            console.log(error);
          }
        };  
        getBook();
        },[]);
  
  return (
    <>
    <div>
      <Navbar/>
      <Courses/>
    </div>
    </>
  )
}

export default Course