import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState('one-light');
  return (
    <>
      <Head>
        <title>Vishwanath B.</title>
        {/* <link
          rel="preload"
          href="https://unpkg.com/prism-themes@1.9.0/themes/prism-one-light.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prism-themes@1.9.0/themes/prism-${theme}.css`}
          rel="stylesheet"
          as="style"
        /> */}
      </Head>
      <div className="flex min-h-screen">
        <Navbar />
        <main className="container mx-auto flex-1">
          <section>{children}</section>
        </main>
        <footer className="mt-8 py-4">
          <div className="container mx-auto flex justify-center"></div>
        </footer>
      </div>
    </>
  );
}
