import React, { useEffect, useState } from 'react';
import Nav from '../Extra/Nav';
import Banner from '../Extra/Banner/Banner';
import WorkCard from '../Cards/WorkCard';
import { motion } from "framer-motion";
import Brands from '../Extra/Brands';
import ServicesCard from '../Cards/ServicesCard';
import Reviews from '../Cards/Reviews';
const Home = () => {

 const [jobs, setJobs] = useState([]);
 const [services, setServices] = useState([]);
 const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/src/JsonFiles/WorkCard.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, []);

  useEffect(()=>{
    fetch('/src/JsonFiles/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  },[])


useEffect(()=>{
  fetch('/src/JsonFiles/review.json')
  .then(res=> res.json())
  .then(data=> setReviews(data))
},[])

    return (
        <div>
            <Banner></Banner>
            <motion.h1  animate={{
        color: [
          "#ff0000",
          "#ff7f00",
          "#ffff00",
          "#00ff00",
          "#0000ff",
          "#4b0082",
          "#8b00ff",
          "#00ffff",
          "#ff1493",
          "#00ff7f"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }} className='text-3xl font-bold'>How it Works</motion.h1>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 gap-3">
                {
                    jobs.map(job=> <WorkCard job={job}></WorkCard>)
                }
            </div>
<div className="mt-10">
            <Brands></Brands>
            </div>
             <div className=" py-10 px-8 bg-[#0f2a45] grid  md:grid-cols-3 gap-3">
                {
                    services.map(service=> <ServicesCard service={service}></ServicesCard> )
                }
            </div>
            <div className="">

              {/* {
              
                reviews.map(review=><Reviews review={review}></Reviews>)
              } */}

              <Reviews reviews={reviews}></Reviews>
            </div>
        </div>
    );
};

export default Home;