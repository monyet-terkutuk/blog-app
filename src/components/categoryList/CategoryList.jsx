import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="/blog?cat=style" className={ `${styles.category} ${styles.backend }` }>
          <Image src="/style.png" alt='' width={32} height={32} className={styles.image} />
          Back End
        </Link>
        <Link href="/blog?cat=style" className={ `${styles.category} ${styles.frontend }` }>
          <Image src="/fashion.png" alt='' width={32} height={32} className={styles.image} />
          Front End
        </Link>
        <Link href="/blog?cat=style" className={ `${styles.category} ${styles.javascript }` }>
          <Image src="/food.png" alt='' width={32} height={32} className={styles.image} />
          JavaScript
        </Link>
        <Link href="/blog?cat=style" className={ `${styles.category} ${styles.go }` }>
          <Image src="/travel.png" alt='' width={32} height={32} className={styles.image} />
          Golang
        </Link>
        <Link href="/blog?cat=style" className={ `${styles.category} ${styles.php }` }>
          <Image src="/culture.png" alt='' width={32} height={32} className={styles.image} />
          PHP
        </Link>
        <Link href="/blog?cat=style" className={ `${styles.category} ${styles.java }` }>
          <Image src="/coding.png" alt='' width={32} height={32} className={styles.image} />
          Java
        </Link>
      </div>
    </div>
  )
}
