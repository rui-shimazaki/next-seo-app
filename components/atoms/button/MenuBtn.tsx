import Image from 'next/image';
import Link from 'next/link';

const MenuBtn = () => {
  return (
    <Link href='/blog-page'>
      <div className='flex cursor-pointer mt-12'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 mr-3'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
          />
        </svg>
        <span>Back to blog-page</span>
      </div>
    </Link>
  );
};
export default MenuBtn;
