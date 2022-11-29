import React from 'react';
import { useQuery } from '@tanstack/react-query'
import CategoryCard from '../../components/Category/CategoryCard';
const Home = () => {
const {data:categories =[]} = useQuery({
    queryKey:['categories'],
    queryFn : ()=> fetch('https://b612-used-products-resale-server-side-inky.vercel.app/category')
    .then(res=>res.json())
})
// console.log(categories)

    return (
        <div>
            <div className='grid grid-cols-3 gap-20 mx-10'>
            {
                categories.map(phoneCategory=><CategoryCard key ={phoneCategory._id} phoneCategory={phoneCategory}></CategoryCard>)
            }
        </div>
        </div>
    );
};

export default Home;
