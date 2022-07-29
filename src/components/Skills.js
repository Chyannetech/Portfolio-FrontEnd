import React from 'react'

import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import reactimg from '../assets/reactimg.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import github from '../assets/github.png';
import mongo from '../assets/mongo.png';
import aws from '../assets/aws.png';



const Skills = () => {
    return (
      <div name='skills' className='w-auto h-screen bg-[#000000] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4  border-pink-300'>Skills</p>
                <p className='py-4 text-2xl'>These are some of the technologies I've worked with:</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={js} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reactimg} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="HTML icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt="HTML icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
                <div className='shadow-md shadow-[#9d9d9d] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={aws} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
              
            </div>
        </div>
      </div>
    );
  };
  
  export default Skills;