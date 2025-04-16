import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = ({isDarkMode}) => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a passionate Software Developer from India, building powerful digital solutions with modern technologies, cloud services, and automation.</p>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} 
                    className={`border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer ${isDarkMode ? 'hover:bg-[#2a004a] hover:[box-shadow:4px_4px_0_#fff]': 'hover:[background-color:#fcf4ff] hover:[box-shadow:4px_4px_0_#000]'}  hover:-translate-y-1 duration-500 `}>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className={`text-lg my-4 ${isDarkMode? 'text-white': 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-sm ${ isDarkMode? 'text-white/80' : 'text-gray-600'} leading-5`}>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image alt='' src={assets.right_arrow} className='w-4' /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
