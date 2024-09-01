import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer () {
    return <>

        <footer style={{backgroundColor: "#2c3e50"}} className='pt-5'>

            <div className="container pb-4">
                <div className="row align-items-center text-white text-center g-5">

                    <div className="col-md-4">
                        <div>
                            <h2>ABOUT FREELANCER</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div>
                            <h2>Location</h2>
                            <p>2215 John Daniel Drive</p>
                            <p className='m-0'>Clarke, MO 65243</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div>
                            <h2 className='mb-2'>AROUND THE WEB</h2>
                            
                            <ul className='list-unstyled d-flex justify-content-center gap-4'>
                                <li style={{width: "40px", height: "40px"}} className='border border-1 btn d-flex align-items-center justify-content-center rounded-5'>
                                    <Link className='text-white' to="https://github.com/Abdelsalam-Ebrahim">
                                        <i className="cursor-pointer fa-brands fa-github"></i>
                                    </Link>
                                </li>
                                <li style={{width: "40px", height: "40px"}} className='border border-1 btn d-flex align-items-center justify-content-center rounded-5'>
                                    <Link className='text-white' to="https://www.linkedin.com/in/abdelsalamebrahim/">
                                        <i className='cursor-pointer fa-brands fa-linkedin'></i>
                                    </Link>
                                </li>
                                <li style={{width: "40px", height: "40px"}} className='border border-1 btn d-flex align-items-center justify-content-center rounded-5'>
                                    <Link className='text-white' to="https://www.instagram.com/abdelsalam_ebrahim_/?next=%2F">
                                        <i className='cursor-pointer fa-brands fa-instagram'></i>
                                    </Link>
                                </li>
                                <li style={{width: "40px", height: "40px"}} className='border border-1 btn d-flex align-items-center justify-content-center rounded-5'>
                                    <Link className='text-white' to="https://www.facebook.com/abdelsalam.ebrahim.56?mibextid=LQQJ4d">
                                        <i className='cursor-pointer fa-brands fa-facebook'></i>                                  
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

            <div className='py-3 text-white d-flex justify-content-center align-items-center' style={{backgroundColor: "#1a252f"}}>
                <p className='m-0'>Copyright © Your Website 2024</p>
            </div>
        </footer>

    </>
}