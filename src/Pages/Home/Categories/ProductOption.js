import React from 'react';

const ProductOption = ({ product, data, setModelProduct }) => {
    const { img, location, originalPrice, title, resalePrice, verify_seller, used, date, author } = product
    // console.log(product)
    // console.log(data)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{location}</p>
                <div className='flex justify-between'>
                    <p>Resale Price : ${resalePrice}</p>
                    <p>Orginal Price : ${originalPrice}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Year of Use : {used} Year</p>
                    <p>Post Time : {date}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Saller Name : {author.name}</p>
                    <p>Saller Verify : {verify_seller}</p>
                </div>
                <div className="card-actions justify-end">
                    <label
                        onClick={() => setModelProduct(product)}
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductOption;