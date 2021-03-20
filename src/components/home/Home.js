import React from 'react';
import Header from '../header/Header';
import riderData from '../../fakedata/riders'
import Rider from '../rider/Rider';
import './home.css'

const Home = () => {
    console.log(riderData)
    return (
        <div className="home-container">
            <Header></Header>
            <div className="container">
            <div className="row">
            {
                riderData.map( rider => <Rider key={rider.key} rider={rider}></Rider> )
            }    
            </div>
            </div>
            
            
        
        </div>
    );
};

export default Home;