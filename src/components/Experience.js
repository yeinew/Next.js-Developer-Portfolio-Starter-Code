import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import Lilcon from './Lilcon';




const Details = ({ rank, company, companyLink, time, address, description }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <Lilcon reference={ref} />
            <motion.div

                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring " }}

            >

                <h3 className='capitalize font-bold text-2xl'>{rank}&nbsp;<a href={companyLink}
                    target='_blank'
                    className='text-primary capitalize'
                >@{company}</a> </h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full mt-1'>
                    {description}
                </p>
            </motion.div>
        </li>

    )
}

const Experience = () => {
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
                Experience
            </h2>
            <div ref={ref} className='w-[75] mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
                />
                <ul className='w-full flex flex-col items-center justify-between ml-4'>
                    <Details
                        rank="Saphire" company="Streakk"
                        companyLink="https://web.streakk.io/auth/signup/9704666408/"
                        time="2023-Present" address="Burj Khalifa Blvd - Dubai"
                        description="As a Sapphire-ranked leader in network marketing, I've achieved significant success and leadership within the industry. With a focus on building teams and selling products/services, I've excelled in this business model. In this context, tokens serve as digital rewards or incentives, while wallets provide secure storage and management for these assets. Looking ahead, the future of network marketing lies in the promising growth and innovation of blockchain technology, which brings enhanced security, transparency, and efficiency to the industry."

                    />
                    <Details
                        rank="Master" company="OMD"
                        companyLink="https://onemillionsdollar.com/ref-yeinew"
                        time="2023-Present" address="Florida – EEUU"
                        description="As a leadership figure at OMD (OneMillionsDollar.com LLC), I am proud to be part of a company that combines proven models with innovation to create a unique presence in the internet market. Our focus on affiliate benefits, low-cost business opportunities, and reduced risk levels sets us apart.

                    Our program revolves around mining and assembling crews, resulting in Gold Bonds that can be redeemed in Allied stores or converted to USDT. Additionally, OMD has its own cryptographic token, offering short, medium, and long-term usability and positioning. With a quarterly, semi-annual, and annual Staking program, investors can enjoy monthly returns of up to 15%.
                    
                    But our commitment extends beyond profitability. OneMillionsDollar.com LLC believes in giving back to society, allocating 10% of global profits to support various causes worldwide.
                    
                    Join me at OMD and let's achieve stability, prosperity, and make a positive impact together."

                    />
                    <Details
                        rank="Expert" company="Muquant"
                        companyLink="https://muquant.com/?ref=0xDedd25219b15F0A1e69DbC6cAB434A0266776c0F"
                        time="2023-Present" address="Maidstone, Kent, Reino Unido"
                        description="As a leader at Muquant, I am proud to be part of a community-driven company that prioritizes fairness, development, and sharing rewards. With our quantitative community fund protocol, we create an inclusive ecosystem for all.

                    MuSwap, our next-gen swap protocol, offers a feeless and hassle-free trading experience. Our μVault provides rare passive rewards, while μArbitrage empowers the community to exploit opportunities and share the rewards.
                    
                    With MUQT as our governance token, you can vote, trade, mint, lock, and enjoy rewards. Invest in the power of infrastructure and join us in driving the growth of the μQuant ecosystem.
                    
                    Discover the potential of MUQT today, with a capped supply, burned tokens, and audited protocols. Experience the power of Muquant and be part of the decentralized future."

                    />
                </ul>
            </div>
        </div>

    )
}

export default Experience