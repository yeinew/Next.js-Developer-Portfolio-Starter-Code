import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePicture from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';
import JoinGroup from '@/components/JoinGroup';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";



export default function Home() {
  return (
    <>
      <Head>
        <title>YewFunnel | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2 '>
              <Image src={profilePicture} alt='Yeinew' className='w-full h-auto' />
            </div>
            <div className='w-1/2 flex flex-col mt-14 items-center self-center'>
              <AnimatedText text="Blockchain-Driven Digital Dynamos: Unleashing The Power Of Data-Driven Funnels For Explosive Growth" className="!text-5xl !text-left" />
              <br />
              <p className='my-4 text-base font-medium'>
              Unleash your digital dominance elevate your brand to new heights with the irresistible power of a blockchain-enabled digital marketing networker. Experience the exhilaration of unparalleled influence as I harness the art of persuasion, strategic vision, and data-driven mastery. Witness the transformative potential of blockchain technology as it enhances the effectiveness of your online presence, empowering me to craft engaging campaigns, ignite explosive growth, and command the attention of your target audience with unprecedented transparency and security. Prepare to dominate the digital landscape and conquer your industry with my unmatched networker skills, fused with the cutting-edge capabilities of blockchain. Success awaits  let&apos;s embark on your transformative journey to digital greatness, powered by the blockchain revolution.              
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="https://chat.whatsapp.com/IK3IYCt0TPZLV4OqN2T0OZ" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Group</Link>
              </div>
            </div>
          </div>
        </Layout>

        <JoinGroup/>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt='YewFunnel' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
