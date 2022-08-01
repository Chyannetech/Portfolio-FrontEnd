import React from "react";
import { services } from "../data/Data";
import { HiArrowNarrowRight } from 'react-icons/hi';


const Services = () => {
  return (
    
    <div className='services text-lg pt-28 bg-black' id = "services">
    
        <div className='container max-w-[1000px] mx-auto justify-center w-full h-full '>
            <div className='services-content'>
            <div className=" pb-10 pt-20 pl-4">
            <p className="text-4xl inline center font-bold text-white border-b-4 border-[#121212]">
            Services
            </p> 
            </div>
                <div className='services-list grid '>
                
                    {
                        services.map((service, index) => {
                            return (
                                <div className='services-item border-1 shadow-lg shadow-[#a942ae] bg-[#0d0d0d] text-center' key = {index}>
                                    <div className='services-item-img'>
                                        <img src = {service.image} className = "mx-auto" alt = "" />
                                    </div>
                                    <div className='services-item-text'>
                                        <h4 className='fs-22 fw-5 op-08'>{service.title}</h4>
                                        <p className='text mx-auto'>{service.paragraph}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto"> 
            <button className="text-white group mx-auto border-2 px-6 py-3 my-14 flex items-center hover:bg-[#292929] shadow-lg shadow-[#262626]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
          </div>
        </div>
        
    </div>
  )
}

export default Services

  
  


