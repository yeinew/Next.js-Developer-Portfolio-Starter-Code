import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router';
import { FacebookIcon, InstagramIcon, MoonIcon, SunIcon, TiktokIcon, TwitterIcon, YoutubeIcon } from './Icon';
import { motion } from "framer-motion";



const CustomLink = ({ href, title, className = "" }) => {

    const router = useRouter();
    console.log(router);
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/articles" title="Articles" className='ml-4' />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a href="https://twitter.com/Yeinew" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className='w-16 mr-3'
                >
                    <TwitterIcon />
                </motion.a>
                <motion.a href="https://www.facebook.com/YEINEW" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className='w-16 mx-3'
                >
                    <FacebookIcon />
                </motion.a>
                <motion.a href="https://www.instagram.com/worldtravelerbtc" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className='w-16 mx-3'
                >
                    <InstagramIcon />
                </motion.a>
                <motion.a href="https://www.youtube.com/channel/UC_kQfjcWMWMsMYcbZfCTGjQ" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className='w-16 mx-3'
                >
                    <YoutubeIcon />
                </motion.a>
                <motion.a href="https://www.tiktok.com/@yeinerenriquesant" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale:0.9}}
                    className='w-16 ml-3'
                >
                    <TiktokIcon />
                </motion.a>

            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar