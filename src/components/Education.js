import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import Lilcon from './Lilcon';




const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Lilcon reference={ref} />
            <motion.div

                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}

            >

                <h3 className='capitalize font-bold text-2xl'>
                    {type}
                </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full mt-1'>
                    {info}
                </p>
            </motion.div>
        </li>

    )
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Education
            </h2>
            <div ref={ref} className='w-[75] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
                />
                <ul className='w-full flex flex-col items-center justify-between ml-4'>
                <Details
                        type="Digital Marketing: Content & Community Manager" 
                        time="2023"
                        place="Galileo University" 
                        info="Mastering Social Media Marketing:

                        Strategies for conversion funnel phases (TOFU, MOFU, BOFU),
                        measuring impact with metrics and KPIs,
                        creating valuable content for social media,
                        achieving brand positioning for all sizes,
                        maximizing brand impact on top platforms,
                        leveraging tools like Google, Analytics, HubSpot,
                        managing content with ease using CoSchedule,
                        analyzing and monitoring with Sysomos, Unmetric,
                        ahoosing the best social media platforms,
                        elevate your social media game and make a lasting impact!
                        
                        #SocialMediaMarketing #ConversionFunnel #BrandPositioning #ContentCreation #Tools"

                    />
                    
                    
                    
                    
                    <Details
                        type="Digital Marketing on Social Media" 
                        time="2023"
                        place="Universitat Politècnica de València" 
                        info=" Introducing a Digital Marketing Professional with Social Media Expertise! 

                        Looking to boost your online presence and drive business growth? I can help!
                        
                         Design and evaluate impactful digital marketing strategies aligned with your objectives.
                         Select the best social media platforms for your business and engage your target audience.
                         Create compelling content to nurture lasting customer relationships.
                         Optimize ad campaigns on Facebook, Instagram, LinkedIn, and YouTube.
                         Leverage WhatsApp for effective digital marketing.
                         Schedule content efficiently using top-notch tools.
                         Manage reputation crises and develop contingency plans.
                        
                        Ready to take your digital marketing to new heights? Let's connect and make your brand stand out!"

                    />
                    <Details
                        type="Attract and Engage Customers with Digital Marketing" 
                        time="2020-2021"
                        place="Google Career Certificates" 
                        info="You will explore the stages of the marketing funnel and learn how to use digital marketing tactics to move customers through the stages. You’ll learn how to increase the quality and quantity of website traffic by understanding SEO fundamentals like keyword research, search engine algorithms, and link building. You will also learn about paid search and advertising, and explore tactics used to gain visibility and reach potential customers on search engine results pages, or SERPs. By the end of this course you’ll be able to apply digital marketing strategies, best practices, and tools to increase awareness of a business, understand customer needs, and engage people's interests with products and services."

                    />
                  


                    
                </ul>
            </div>
        </div>

    )
}

export default Education