import React from 'react';
import './Contact.css'

export default function Contact () {
    return <>

        <div className='contact'>
            <div className='text-center my-5 w-50 mx-auto'>
                <h2>CONTACT SECTION</h2>
                <div className="icon">
                    <i className="fa-solid fa-star fa-xl"></i>
                </div>

                <form action="">
                    <input
                        type="text"
                        placeholder='User Name'
                        className='w-100 form-control border-0 border-bottom mt-4'
                    />

                    <input
                        type="email"
                        placeholder='Email'
                        className='w-100 form-control border-0 border-bottom mt-4'
                    />

                    <input
                        type="number"
                        placeholder='Age'
                        className='w-100 form-control border-0 border-bottom mt-4'
                    />

                    <input
                        type="password"
                        placeholder='Password'
                        className='w-100 form-control border-0 border-bottom mt-4'
                    />

                    <button className='btn mt-4 d-block mx-lg-auto me-md-auto'>Send</button>
                </form>
            </div>
        </div>

    </>
}