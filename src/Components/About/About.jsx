import React from 'react';
import "./About.css";

export default function About () {
    return <>

        <section className='vh-100 text-center d-flex justify-content-center align-items-center about'>
            <div className='text-white'>
                <h1>ABOUT COMPONENT</h1>
                
                <div className="icon">
                    <i className="fa-solid fa-star fa-xl"></i>
                </div>


                <div className="container mt-4">
                    <div className="row gy-4">
                        <div className="col-md-6">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptate numquam maxime nulla, ipsa,
                                assumenda fugiat saepe, molestiae iure adipisci voluptatibu.
                            </p>
                        </div>

                        <div className="col-md-6">
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptate numquam maxime nulla, ipsa,
                            assumenda fugiat saepe, molestiae iure adipisci voluptatibu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
}