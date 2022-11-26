import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({phoneCategory}) => {
    const{category,image,_id}= phoneCategory;
    return (
        <div>
         <Link to ={`/${_id}`}><div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body mx-auto">
    <h2 className="card-title ">{category}</h2>
    </div>
</div>   
</Link>

        </div>
    );
};

export default CategoryCard;