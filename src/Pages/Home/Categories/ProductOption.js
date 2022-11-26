import React from 'react';

const ProductOption = ({ product, data, setModelProduct }) => {
    const { image, location, orginal_price, product_name, resale_price, seller_name, verify_seller, yearOFuse } = product
    // console.log(product)
    // console.log(data)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product_name}</h2>
                <p>{location}</p>
                <div className='flex justify-between'>
                    <p>Resale Price : ${resale_price}</p>
                    <p>Orginal Price : ${orginal_price}</p>
                </div>
                <div className='flex justify-between'>
                    <p>Year of Use : {yearOFuse} Year</p>
                    <p>Post Time : </p>
                </div>
                <div className='flex justify-between'>
                    <p>Saller Name : {seller_name}</p>
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