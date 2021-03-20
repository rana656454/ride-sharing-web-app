import React from 'react';
import { Link } from 'react-router-dom';
import './rider.css'

const Rider = (props) => {
    const {name,img,key} =props.rider
    return (

            <div className="col-md-3 col-sm-12">
              	<div className="product-item">
                <img src={img} alt="" srcset=""/>
                <h3>{name}</h3>
                <Link to={`/rideshare/${key}`}>Click for hire</Link>
             </div>
             </div>
             
             

    );
};

export default Rider;