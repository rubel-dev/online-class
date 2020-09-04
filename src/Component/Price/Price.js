import React from 'react';
import './Price.css'

const Price = (props) => {
const newPrice = props.price;
let total = 0;
for(let i = 0; i < newPrice.length; i++){
    const element = newPrice[i];
    total = total + element.price;
}
    return (
        <div className='price'>
            <h4 className='text-center'>Price</h4>
             <h5>total purchase course : {newPrice.length}</h5>
             <h4>total amount: ${total}</h4>
        </div>
    );
};

export default Price;