import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
import axios from "axios";
import {Link} from "react-router-dom";


function Courses() {
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
    <div className='wax-w-screen-2xl container max-auto md:px-20 px-4'>
        <div className='mt-20 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
              We're delighted to have you{" "} <span className='text-pink-500'>Here ! :)</span>
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum hic minima aliquid natus fugiat quaerat quisquam nulla nam labore voluptates, blanditiis rem, ea velit nemo commodi ullam vero illo maxime.
            </p>
            <Link to="/"><button className="btn btn-secondary px-4 px-2 mt-6">Back Home  </button></Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
          {book.map((item) => (<Cards key={item.id} item={item}/>))}
        </div>
    </div>
    </>
  )
}

export default Courses