import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {

    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? workData : workData.slice(0, 4);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My portfolio</motion.h4>


            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>My latest work
            </motion.h2>


            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio!
                Explore a collection of projects showcasing my expertise in Web development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-10 gap-5 ${isDarkMode ? 'text-black' : ''}`}>
                {visibleProjects.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt='send icon' className='w-5' />
                            </a>

                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                onClick={() => setShowAll(!showAll)}
                className={`w-max flex items-center justify-center gap-2 ${isDarkMode ? ' text-white border-white hover:[background-color:#2a004a]' : 'text-gray-700  border-gray-700 hover:[background-color:#fcf4ff]'}  border-[0.5px] rounded-full py-3 px-10 mx-auto my-20  duration-500`}>
                {showAll ? 'Show less' : 'Show more'}
                <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
            </motion.button>

        </motion.div>
    )
}

export default Work
