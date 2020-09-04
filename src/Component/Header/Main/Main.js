import React, { useEffect, useState } from 'react';
 import data from '../../../data/data.json'
import Course from '../../Course/Course';
import Price from '../../Price/Price';
import './Main.css'

const Main = () => {
   const[courses,setCourse] = useState([])
   const [price , setPrice] = useState([])

const priceAddHandler =(product)=>{
    const newPrice = [...price , product]
     setPrice(newPrice)
}
   useEffect(()=>{
        setCourse(data)
   },[])
    
    
    return (
        <div className='main-container'>
            <div className='course-container'>
                
                {
                    courses.map(course=> <Course course ={course} priceAddHandler={priceAddHandler}></Course>)
                }
            </div>
            <div className='price-container'>
                <Price price={price}></Price>
            </div>
        </div>
    );
};

export default Main;