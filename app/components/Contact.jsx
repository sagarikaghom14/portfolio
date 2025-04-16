"use client";

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfa090a1-1c10-4e84-8563-f4c28764aac5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] ${isDarkMode ? 'bg-none' : ' bg-[url("/footer-bg-color.png")]'}`}>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Contact with me</h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you! If you have any questions, comments, or feedback,
        please use the form below.
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8'>
          <input type="text" placeholder='Enter your name' required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? 'bg-[#2a004a]/30 border-white/90' : 'bg-white border-gray-400'}`}
            name='name' />

          <input type="email" placeholder='Enter your email' required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? 'bg-[#2a004a]/30 border-white/90' : 'bg-white border-gray-400'}`}
            name='email' />

        </div>

        <textarea
          rows="5"
          placeholder='Enter your message'
          required
          className={`w-full p-4 outline-none border-[0.5px] mb-6 rounded-md placeholder:text-gray-500 ${isDarkMode ? 'bg-[#2a004a]/30 border-white/90 placeholder:text-white/70' : 'bg-white border-gray-400'}`}
          name='message'
        ></textarea>


        <button type='submit'
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 ${isDarkMode ? 'bg-transparent border-[0.5px] hover:bg-[#2a004a]' : 'bg-black/80 hover:bg-black'}  text-white rounded-full mx-auto  duration-500`}>
          Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
