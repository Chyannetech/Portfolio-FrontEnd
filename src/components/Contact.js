

import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full md:h-screen bg-[#000000] flex justify-center pt-28 items-center p-4 px-10'>
        <form method='post' action="https://getform.io/f/e2e2b7fb-1b02-42cc-98cd-8a70c7f9c1c8" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#121212] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - chyannetech@gmail.com</p>
            </div>
            <input className='bg-[#ffffff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#0e0e0e] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact