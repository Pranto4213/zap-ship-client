import React from 'react';

const ServicesCard = ({service}) => {
    const {img, description, title} = service;
    return (
       <div className="card bg-base-100  hover:bg-[#CAEB66] border border-gray-400 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl  invert " />
  </figure>
  <div className="card-body text-center">
    <h2 className=" text-center text-xl font-bold w-full">{title}</h2>
    <p>{description}</p>
  
  </div>
</div>
    );
};

export default ServicesCard;