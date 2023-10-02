import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css'

export const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href='/' className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} /> 
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.javascript}`}>JavaScript</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Budi Wo</span>
              <span className={styles.date}> - 30.09.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} /> 
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.php}`}>PHP</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Budi Wo</span>
              <span className={styles.date}> - 30.09.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} /> 
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.frontend}`}>Front End</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Budi Wo</span>
              <span className={styles.date}> - 30.09.2023</span>
            </div>
          </div>
        </Link>
    </div>
  )
}
