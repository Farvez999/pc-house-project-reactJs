import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {

    const data = useLoaderData()
    console.log(data)
    const { _id, title, icon } = data;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name</h2>
                <p>Location</p>
                <div className='flex justify-between'>
                    <p>Resale Price : </p>
                    <p>Orginal Price : </p>
                </div>
                <div className='flex justify-between'>
                    <p>Year of Use : </p>
                    <p>Post Time : </p>
                </div>
                <div className='flex justify-between'>
                    <p>Saller Name : </p>
                    <p>Saller Verify : </p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;