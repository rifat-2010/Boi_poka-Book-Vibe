import React from 'react';

import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
     <div className="hero bg-base-200 min-h-[554px] mt-[50px] mb-[100px]">
      <div className="hero-content flex-col lg:flex-row-reverse md:px-20">
        <img
          src={bookimage}
          className="max-w-sm w-full rounded-lg shadow-2xl" />
        <div className='flex flex-col gap-5'>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
       
          <button className="w-[190px] h-[65px] btn  bg-[#23BE0A] text-white font-bold rounded">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;