import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}>

      <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >Introduction
      </motion.h4>

      <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >About me</motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='w-full flex flex-col lg:flex-row items-center gap-20 my-10'>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'>
          <p
            className={`mb-10 mx-2x font-Ovo text-justify ${isDarkMode ? 'text-white/80' : 'text-gray-700'
              }`}
          >
            Hi, I'm Sagarika Ghom — a passionate web developer who loves crafting beautiful digital experiences and exploring the endless possibilities of technology.
            I specialize in building dynamic websites with the MERN stack, bringing designs to life with animations, and working on AI-driven projects. Along with development, I’m passionate about CI/CD automation, using tools like Jenkins, Docker, and leveraging the power of the AWS Cloud to create smooth, scalable deployments.
            Every project is a new opportunity for me to learn, innovate, and bring ideas into reality. I believe in blending creativity with powerful technology to build solutions that truly make an impact.
            Thanks for stopping by — I’m excited for all the adventures ahead!
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={index}
                className={`rounded-xl p-6 cursor-pointer transition duration-500 hover:-translate-y-1
                ${isDarkMode
                    ? 'border border-white bg-transparent hover:bg-[#2a004a] hover:[box-shadow:4px_4px_0_#fff]'
                    : 'border border-gray-400 hover:[background-color:#fcf4ff] hover:[box-shadow:4px_4px_0_#000]'
                  }`}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className={`my-4 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
              </motion.li>

            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className={`my-6 font-Ovo  ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>Tools I use</motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }} className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-y-1 duration-500  ${isDarkMode ? 'border-white' : 'border-gray-400'}`}
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
