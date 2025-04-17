import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>What I offer
            </motion.h4>


            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>My Services
            </motion.h2>


            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a passionate Software Developer from India, building powerful digital solutions with modern technologies, cloud services, and automation.
            </motion.p>

            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }} 
            className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div 
                    whileHover={{scale:1.05}}
                    key={index}
                        className={`border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer ${isDarkMode ? 'hover:bg-[#2a004a] hover:[box-shadow:4px_4px_0_#fff]' : 'hover:[background-color:#fcf4ff] hover:[box-shadow:4px_4px_0_#000]'}  hover:-translate-y-1 duration-500 `}>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className={`text-lg my-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-600'} leading-5`}>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image alt='' src={assets.right_arrow} className='w-4' /></a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services
