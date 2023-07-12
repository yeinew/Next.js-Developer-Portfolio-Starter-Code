import React from 'react'
import { CircularText } from './Icon'
import Link from 'next/link'

const JoinGroup = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className=' w-80 h-auto flex items-center justify-center relative'>
                <CircularText className={"fill-dark animate-spin-slow"} />
                <Link href="https://chat.whatsapp.com/IK3IYCt0TPZLV4OqN2T0OZ" className='flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark
                 w-28 h-28 rounded-full font-semibold hover:bg-light hover:text-dark
                '>
                    Join Group
                </Link>
            </div>

        </div>
    )
}

export default JoinGroup