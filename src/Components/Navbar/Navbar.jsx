import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar () {

    return <>

        <nav className="navbar navbar-expand-lg p-4" style={{backgroundColor: "#2c3e50"}}>
            <div className="container">
                <Link className="navbar-brand fw-bold text-white" href="#"> START FRAMEWORK </Link>
                
                <button style={{color: "#1abc9c"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item fw-bold me-3">
                            <Link className="nav-link active text-white" aria-current="page" to="/Home">HOME</Link>
                        </li>

                        <li className="nav-item fw-bold me-3">
                            <Link className="nav-link active text-white" aria-current="page" to="/about">ABOUT</Link>
                        </li>

                        <li className="nav-item fw-bold me-3">
                            <Link className="nav-link active text-white" aria-current="page" to="/portfolio">PORTFOLIO</Link>
                        </li>
                        
                        <li className="nav-item fw-bold me-3">
                            <Link className="nav-link active text-white" aria-current="page" to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </>
}