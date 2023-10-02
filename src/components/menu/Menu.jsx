import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { MenuPost } from '../menuPosts/MenuPost'
import MenuCategories from '../menuCategories/MenuCategories'

export const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Most Popular */}
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false} />

      {/* End Most Popular */}

      {/* Categories */}
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      {/* End Categories */}

      {/* Editor Pick */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor Pick</h1>
      <MenuPost withImage={true} />
      {/* End Editor Pick */}

    </div>
  )
}
