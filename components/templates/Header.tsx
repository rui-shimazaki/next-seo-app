import Link from 'next/link';
import React, { FC } from 'react';
import { memo, VFC } from 'react';
import Avatar from '../../utils/image';

const Header = () => {
  return (
    <header className='w-full h-12 flex justify-center items-center border-t'>
      <nav className='bg-gray-800 w-screen'>
        <div className='flex items-center justify-between pl-8 h-14'>
          <Avatar />
          <div className='flex space-x-4'>
            <Link href='/'>
              <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                Home
              </a>
            </Link>
            <Link href='/blog-page'>
              <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                Blog
              </a>
            </Link>
            <Link href='/contact-page'>
              <a className='text-gray-300 hover:bg-gray-700 px-3 py-2 rounded'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
