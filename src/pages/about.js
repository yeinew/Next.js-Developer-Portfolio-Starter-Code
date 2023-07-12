import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/profilePic.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';


const AnimatedNumbers = ({ value }) => {

    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            };
        })
    }, [springValue, value])



    return <span ref={ref}></span>
}


const about = () => {
    return (
        <>
            <Head>
                <title>YewFunnel | About</title>
                <meta name="description" content="Funnel" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Welcome to the realm of Blockchain-Driven Digital Dynamos!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16 '>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>
                                Hello <span className='font-bold'>I&apos;m Yeinew</span>, thrilled to have you here. I am a passionate digital marketing networker who thrives on helping brands ascend to unparalleled heights in the digital landscape.
                            </p>
                            <p className=' my-4 font-medium'>
                                Harnessing the transformative potential of blockchain technology, I unlock the power of data-driven funnels to catapult your brand&apos;s influence to new horizons. With a blend of artful persuasion, strategic vision, and data mastery, I orchestrate compelling campaigns that resonate with your target audience.
                            </p>
                            <p className='font-medium'>
                                In a world craving transparency and security, blockchain technology emerges as our guiding force. By leveraging its capabilities, we can infuse your online presence with an unmatched level of trust and authenticity. Together, we will create an environment where your brand commands attention and ignites explosive growth.
                            </p>
                            <p className='my-4 font-medium'>
                                As a seasoned digital marketing networker, I bring a unique set of skills and insights to the table. By fusing my expertise with the cutting-edge capabilities of blockchain, we will dominate your industry and leave a lasting impact. Success is within reach, and together, we will embark on a transformative journey to digital greatness.
                            </p>
                            <p className='font-medium'>
                                I invite you to join me on this revolutionary path to success. Together, let&apos;s unleash the power of data-driven funnels, amplified by the blockchain revolution. Prepare to experience digital dominance like never before.
                            </p>
                            <p className='mt-4 font-medium'>
                                Are you ready to revolutionize your brand? Let&apos;s connect and embark on this transformative journey together.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                            <Image src={profilePic} alt='YewFunnel' className='w-full h-auto rounded-2xl' />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience/>
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about