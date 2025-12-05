import Link from 'next/link';
import React from 'react';
import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import styles from './main-header.module.css';
import MainHeaderBackground from '@/components/main-header/main-header-background';

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href={'/'} className={styles.logo}>
          <Image priority src={logoImg} alt="NextLevel Food Logo" />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={'/meals'}>Browse Meals</Link>
            </li>
            <li>
              <Link href={'/community'}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
