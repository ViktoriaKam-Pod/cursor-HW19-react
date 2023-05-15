import React from 'react';
import "./Home.css";
const Home = () => {
    return (
        <div className='main-page'>
            <div className="layer">
                <img className="harvey" src= {require("./image/IMG_1.webp")} alt="Foto Harley SPECTER"/>
            </div>
            <hr/>
            <div className="expression">
                <img className="law" src={require("./image/IMG_2.jpg")} alt="law"/>
                <div className="speech">
                    <p>«The law is the law, the truth is subjective»</p>
                    <p>«The success of your client is a success of yours»</p>
                    <p>«I’m not about caring, I’m about winning»</p>
                    <p>«Life has two rules:1 never quit 2 always remember rule no 1»</p>
                    <p className='element'>Harvey Specter</p>
                </div>
                
            </div>
        </div>
    );
};

export default Home;