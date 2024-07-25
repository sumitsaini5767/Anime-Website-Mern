import React from 'react'
import path from '../../constants/Path'

const Navbar = () => {
  return (
    <div className='bg-themeColorBackground flex w-full h-14 px-5'>
        <div className='headerLeft w-1/5'>
            <img alt="logo" className="h-10 w-28 cursor-pointer" src={path.logo} />
        </div>
        <div className='headerRight w-1/5'>

        </div>
    </div>
  )
}

export default Navbar