// import React, { use } from 'react';

const WorkCard = ({job}) => {
const {img, title, description} = job;
    return (
        <div className="card bg-base-100  border border-gray-400 shadow-sm">
  <figure className="px-10 pt-10 flex justify-start">
    <img
      src={img}
      alt="Shoes"
      className="rounded-xl flex justify-start invert " />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
  
  </div>
</div>
    );
};

export default WorkCard;