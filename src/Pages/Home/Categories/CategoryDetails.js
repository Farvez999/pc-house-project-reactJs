import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductOption from './ProductOption';

const CategoryDetails = () => {

    const data = useLoaderData()
    console.log(data)
    const { title } = data;
    console.log(data)

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/categories/${title}`)
            .then(res => res.json())
            .then(data => { setProducts(data); console.log(data) })
    }, [title])



    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <ProductOption
                    key={product._id}
                    product={product}
                    data={data}
                ></ProductOption>)
            }
        </div>

    );
};

export default CategoryDetails;