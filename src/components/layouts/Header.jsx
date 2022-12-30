import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-600 h-32 w-full px-8 shadow-md flex items-center'>
      <a href="https://ipam.org.br/pt/" target="_blank" className='w-20 cursor-pointer'>
        <img src="/assets/images/ipam-logo.jpg" alt="IPAM Logo" />
      </a>
    </header> 
  )
}

export default Header
