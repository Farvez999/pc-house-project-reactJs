import React from 'react';
import CategoriesCard from './CategoriesCard';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {

    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions,date'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json()
            return data
        }
    })

    // const categoriesData =
    //     [
    //         {
    //             "title": "Dell",
    //             "icon": "https://www.startech.com.bd/image/cache/catalog/laptop/dell/inspiron-15-3511/inspiron-15-3511-88989-228x228.jpg"

    //         },
    //         {
    //             "title": "Hp",
    //             "icon": "https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-du1116tu/15s-du1116tu-01-228x228.jpg"

    //         },
    //         {
    //             "title": "Asus",
    //             "icon": "https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-15-x515ea/vivobook-15-x515ea-01-228x228.jpg"

    //         }
    //     ]

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