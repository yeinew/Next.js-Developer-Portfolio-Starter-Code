import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {

    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark py-3 px-6 cursor-pointer absolute '

            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.05 }}
            viewport={{once:true}}
        >
            {name}
        </motion.div>

    )
}



const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark p-3 cursor-pointer '
                   
                    whileHover={{ scale: 1.05 }}
                >
                    Digital Marketing
                </motion.div>

                <Skill name="TARGET" x="-26vw" y="2vw" />
                <Skill name="UI/UX" x="-5vw" y="-10vw" />
                <Skill name="DESIGN" x="20vw" y="6vw" />
                <Skill name="VISUAL" x="0vw" y="12vw" />
                <Skill name="ADS" x="-20vw" y="-15vw" />
                <Skill name="SOCIAL MEDIA" x="15vw" y="-12vw" />
                <Skill name="ENGAGEMENT" x="32vw" y="-5vw" />
                <Skill name="SEO" x="0vw" y="-20vw" />         
                <Skill name="LEADERSHIP" x="-25vw" y="18vw" />         
                <Skill name="FUNNEL" x="18vw" y="18vw" />         



            </div>
        </>
    )
}

export default Skills