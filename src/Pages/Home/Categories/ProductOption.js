import React from 'react';
import { GoVerified } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ProductOption = ({ product, data, setModelProduct }) => {
    const { img, location, originalPrice, title, resalePrice, verify_seller, used, date, author } = product
    // console.log(product)
    // console.log(data)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><MdLocationOn className='inline-block text-pink-600'></MdLocationOn> {location}</p>
                <div className='flex justify-between'>
                    <p>Resale Price : ${resalePrice}</p>
                    <p>Orginal Price : ${originalPrice}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Year of Use : {used} Year</p>
                    <p>Post Time : {date}</p>
                </div>
                {/* <div className='flex justify-between'>
                    <p>Saller Name : {author.name}</p>
                    <p><GoVerified></GoVerified> {author.varify}</p>
                </div> */}
                <div className="card-actions justify-end">
                    <label
                        onClick={() => setModelProduct(product)}
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                    >Book Now</label>
                </div>
                <hr></hr>
                <div className='flex justify-between my-1'>
                    <p><FaUserCircle className='inline-block'></FaUserCircle> {author.name}</p>
                    <p><GoVerified className='inline-block text-blue-600'></GoVerified> {author.varify}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductOption;