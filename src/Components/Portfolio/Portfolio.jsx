import React from 'react';
import "./Portfolio.css";

export default function Portfolio () {

    const data = [
        {img: require("../../Images/01.jpg"), id:"img1"},
        {img: require("../../Images/02.jpg"), id:"img2"},
        {img: require("../../Images/03.jpg"), id:"img3"},
        {img: require("../../Images/04.jpg"), id:"img4"},
        {img: require("../../Images/05.jpg"), id:"img5"},
        {img: require("../../Images/06.jpg"), id:"img6"},
    ]

    return <>

        <div className="portfolio pb-5 text-center text-white">
            <h2 className='my-4'>PORTFOLIO COMPONENT</h2>

            <div className="container">
                <div className="row g-4">
                    {data.map(item => {
                        return <div className='col-md-4' key={item.id}>
                            <div className='portfolio-item'>
                                <img src={item.img} alt={item.id} className='w-100 rounded-3' />
                                
                                <div
                                    className="plus rounded-3"
                                    data-bs-toggle="modal"
                                    data-bs-target={"#"+item.id}
                                >
                                    <i className='fa-solid fa-plus'></i>
                                </div>
                            </div>
                        </div>
                    })}

                    {data.map(item => {
                        return <div 
                            className='modal fade'
                            key={item.id}
                            id={item.id}
                            aria-labelledby='exampleModalLabel'
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body"><img src={item.img} alt={item.id} className='w-100' /></div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>

    </>
}