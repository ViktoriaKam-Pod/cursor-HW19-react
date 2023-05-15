import React from 'react';
import "./Galery.css"
const Galery = () => {
    return (
        <div className='galery-position'>
            <img className='galery-img' src={require("./galery-image/photo-1.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-2.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-3.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-4.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-5.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-6.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-7.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-8.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-9.avif")}/>
            <img className='galery-img' src={require("./galery-image/photo-10.avif")}/> 
            
        </div>
    );
};

export default Galery;