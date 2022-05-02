import { memo } from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full h-12 flex justify-center items-center border-t'>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <Image
          src='/vercel.svg'
          alt='Vercel Logo'
          width={72}
          height={16}
          className='h-4 ml-2'
        />
      </a>
    </footer>
  );
};
export default Footer;
