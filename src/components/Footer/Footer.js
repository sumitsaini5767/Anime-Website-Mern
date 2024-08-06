import React from 'react'
import Path from '../../constants/Path'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-themeColorBackground py-8 px-4'>
        <div className='pb-4 border-b-[1px] border-b-[rgba(255,255,255,0.15)] w-36 mb-5'>
            <img
                alt="logo"
                className="h-10 w-28 cursor-pointer mr-4"
                src={Path.logo}
            />
        </div>
        <div className='flex flex-row items-end mb-5'>
            <h3 className='text-white font-semibold pr-5 border-r-[1px] border-r-[rgba(255,255,255,0.15)]'>
                A-Z LIST
            </h3>
            <p className='text-white text-sm ml-5'>
                Searching anime order by alphabet name A to Z.
            </p>
        </div>
        <div className='flex flex-row text-white text-sm *:mr-10'>
            <Link>
                Terms and services
            </Link>
            <Link>
                Policies
            </Link>
            <Link>
                Contact
            </Link>
        </div>
    </div>
  )
}

export default Footer