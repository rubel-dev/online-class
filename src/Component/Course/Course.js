import React from 'react';
import './Course.css'

const Course = (props) => {
     const {name , img , price} = props.course
    return (
        <div className='course'>
           <div className='product-img'>
                <img src={img} alt=""/>
           </div>
           <div className='content'>
                <h4>{name}</h4>
                <p><small>price : ${price}</small></p>
                <button className='btn btn-secondary' onClick={()=>props.priceAddHandler(props.course)}>enroll now</button>
           </div>
           
        </div>
    );
};

export default Course;