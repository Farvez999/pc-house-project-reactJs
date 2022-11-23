import React from 'react';
import CategoriesCard from './CategoriesCard';
import dell from '../../../assets/dell-inspiron-15.jpg'
import hp from '../../../assets/hp-15s.jpg'
import asus from '../../../assets/asus-vivobook-15.jpg'

const Categories = () => {

    const categoriesData = [
        {
            id: 1,
            name: 'Dell',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: dell,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Hp',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: hp,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 3,
            name: 'Asus',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: asus,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='mt-24'>
            <div>
                <h4 className='text-center text-base text-4xl text-primary'>Categories</h4>
                <h4 className='text-4xl text-center text-base text-black'>Categories We Provide</h4>
            </div>
            <div className='grid mt-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categoriesData.map(categorie => <CategoriesCard
                        key={categorie.id}
                        categorie={categorie}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;