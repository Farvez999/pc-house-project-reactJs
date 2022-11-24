import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categorie }) => {
    const { _id, name, icon } = categorie;
    console.log(categorie)

    const handleCategory = () => {
        console.log(categorie)

    }

    return (
        <div onClick={handleCategory} className="card bg-base-100 shadow-xl">
            <Link to={`/services/${_id}`}>
                <button className="btn btn-primary">See Details</button>
            </Link>
            <figure className="px-10 pt-10">
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>

            </div>
        </div>
    );
};

export default CategoriesCard;