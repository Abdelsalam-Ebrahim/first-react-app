import React from 'react';
import "./Home.css"

export default function Home () {
    return <>   

        <header className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='text-center text-white'>
                <img src={require("../../Images/team-01.png")} alt="Home-Photo" className='w-50'/>
                <h1 className='fw-bold my-3'>START FRAMEWORK</h1>
                
                <div className="icon">
                    <i className="fa-solid fa-star fa-xl"></i>
                </div>
                
                <p className='mt-4'>Graphic Artist - Web Designer - React Developer</p>
            </div>
        </header>

    </>
}