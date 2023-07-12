import AnimatedText from '@/components/AnimatedText';
import { FacebookIcon } from '@/components/Icon';
import Layout from '@/components/Layout';
import Head from 'next/head';
import YouTube from 'react-youtube';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cryptoPic from "../../public/images/projects/streakk-bg-dark.png";
import artificialPic from "../../public/images/projects/artificial-1080x1080.png";


const YoutubeComponent = () => {
    const videoId = 'mYNqikThZvQ'; // Replace with the YouTube video ID you want to display

    return (
        <div>
            <YouTube videoId={videoId} />
        </div>
    );
};



const FeaturedProject = ({ type, title, summary, link, facebook }) => {


    return (
        <article className='w-full flex items-center justify-between
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 
        '>
            <div className=' w-full cursor-pointer overflow-hidden'>
                <YoutubeComponent className='w-full h-auto' />
            </div>

            <div className=' w-3/4 flex flex-col items-start justify-between pl-6 '>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center justify-around'>
                    <Link href={facebook} target='_blank'><Image src={artificialPic} alt="My Image" width={72} height={72} /></Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'

                    > Visit our Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, link, img, facebook }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <Link href={link} target='_blank' className=' w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt="Artificial" className='w-full h-auto' />
            </Link>

            <div className=' w-full flex flex-col items-start justify-between mt-4 '>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                        className='ml-4text-light  text-lg font-semibold'

                    >
                        Visit
                    </Link>
                    <Link href={facebook} target='_blank'>
                        <Image src={artificialPic} alt="My Image" width={72} height={72} />
                        {" "}
                    </Link>
                   
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>YewFunnel | Projects</title>
                <meta name="description" content="Funnel" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Empowering Possibilities, Redefining Finance: Harnessing the Potential of Blockchain Securities for Smart Investments"
                        className=' mb-32'
                    />

                    <div className='grid grid-cols-12 gap-24 '>
                        <div className='col-span-12 '>
                            <FeaturedProject
                                title="ArtificialTech4u"
                                img={cryptoPic}
                                summary="Con nuestra plataforma, usted puede confiar en que sus activos están protegidos de manera sólida y confiable, lo que le permite enfocarse en sus inversiones y objetivos financieros sin preocupaciones innecesarias."
                                link="http://artificialtech4u.com/"
                                facebook="https://www.facebook.com/YEINEW"
                                type="Featured Project"




                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="ArtificialTech4u"
                                img={cryptoPic}
                                summary="Con nuestra plataforma, usted puede confiar en que sus activos están protegidos de manera sólida y confiable, lo que le permite enfocarse en sus inversiones y objetivos financieros sin preocupaciones innecesarias."
                                link="http://artificialtech4u.com/"
                                facebook="https://www.facebook.com/YEINEW"
                                type="Featured Project"




                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title="ArtificialTech4u"
                                img={cryptoPic}
                                summary="Con nuestra plataforma, usted puede confiar en que sus activos están protegidos de manera sólida y confiable, lo que le permite enfocarse en sus inversiones y objetivos financieros sin preocupaciones innecesarias."
                                link="http://artificialtech4u.com/"
                                facebook="https://www.facebook.com/YEINEW"
                                type="Featured Project"




                            />
                        </div>
                        <div className='col-span-12 '>
                            Featured Projects
                        </div>
                        <div className='col-span-6 '>
                            Project 3
                        </div>
                        <div className='col-span-6 '>
                            Project 4
                        </div>


                    </div>

                </Layout>
            </main>
        </>

    )
}

export default projects