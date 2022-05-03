import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import HeadComponent from './HeadComponent';
import Head from 'next/head';
import Sidebar from './Sidebar';

interface Props {
  children?: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'HP by Nextjs' }: Props) {
  // const title = title;
  return (
    <>
      <HeadComponent title={title} />
      <div className='flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono'>
        <Header />
        <main className='flex flex-row w-screen'>
          <div className='w-9/12 flex flex-col items-center bg-yellow-100'>
            {children}
          </div>
          <Sidebar />
        </main>
        <Footer />
      </div>
    </>
  );
}
