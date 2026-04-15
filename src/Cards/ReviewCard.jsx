import React from 'react';

const ReviewCard = ({review}) => {
    const {name, message, designation}= review;
    
    console.log(review)
    return (
         <div className="bg-gray-100 p-6 rounded-2xl shadow-md max-w-sm">
      
      {/* Quote Icon
      <p className="text-4xl text-gray-300 mb-2">“</p>

      {/* Message */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {message}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-teal-700 rounded-full"></div>

        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div> 
    </div>
    );
};

export default ReviewCard;