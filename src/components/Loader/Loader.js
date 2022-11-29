import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center mt-60'>
           <progress className="progress mx-auto w-56" ></progress> 
        </div>
    );
};

export default Loader;