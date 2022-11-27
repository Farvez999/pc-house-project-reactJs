import React from 'react';
import { GoVerified } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { FcOvertime } from 'react-icons/fc';

const ProductOption = ({ product, data, setModelProduct }) => {
    const { img, location, originalPrice, title, resalePrice, verify_seller, used, date, author } = product
    // console.log(product)
    // console.log(data)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-60' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold'><MdLocationOn className='inline-block text-pink-600'></MdLocationOn> {location}</p>
                <hr></hr>
                <div className='flex justify-between'>
                    <p className='font-bold text-blue-700'>Resale Price : ${resalePrice}</p>
                    <p className=' text-red-600'>Orginal Price : ${originalPrice}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Used : {used}</p>
                    <p><FcOvertime className='text-blue-600 inline-block'></FcOvertime> {date.slice(0, 10)}</p>
                </div>
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
                    {
                        author.varify && <p><GoVerified className='inline-block text-blue-600'></GoVerified> {author.varify}</p>
                    }

                </div>
            </div>
        </div>
    );
};

export default ProductOption;