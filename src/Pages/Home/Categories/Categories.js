import React from 'react';
import CategoriesCard from './CategoriesCard';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {

    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories,date'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json()
            return data
        }
    })


    return (
        <div className='mt-24'>
            <div>
                <h4 className='text-center text-base text-4xl text-primary'>Categories</h4>
                <h4 className='text-4xl text-center text-base text-black'>Categories We Provide</h4>
            </div>
            <div className='grid mt-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(categorie => <CategoriesCard
                        key={categorie._id}
                        categorie={categorie}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;