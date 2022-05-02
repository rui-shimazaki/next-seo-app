import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import HeadComponent from './HeadComponent';
import Head from 'next/head';

interface Props {
  children?: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'HP by Nextjs' }: Props) {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono'>
      <HeadComponent title='test' />
      <Header />
      <main className='flex flex-1 justify-center items-center flex-col w-screen'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
