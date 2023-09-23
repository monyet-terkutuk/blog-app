import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '../themeToggle/ThemeToggle'
import { AuthLinks } from '../authLinks/AuthLinks'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/instagram.png" alt="istagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        <Image src="/discord.png" alt="discord" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
      </div>
      <div className={styles.logo}>Gbril Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}
