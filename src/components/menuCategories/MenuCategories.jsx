import Link from 'next/link'
import React from 'react'
import styles from './menuCategories.module.css'

export default function MenuCategories() {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=golang" className={`${styles.categoryItem} ${styles.golang}`}>Golang</Link>
        <Link href="/blog?cat=javascript" className={`${styles.categoryItem} ${styles.javascript}`}>JavaScript</Link>
        <Link href="/blog?cat=php" className={`${styles.categoryItem} ${styles.php}`}>PHP</Link>
        <Link href="/blog?cat=java" className={`${styles.categoryItem} ${styles.java}`}>Java</Link>
        <Link href="/blog?cat=frontend" className={`${styles.categoryItem} ${styles.frontend}`}>Front End</Link>
        <Link href="/blog?cat=backend" className={`${styles.categoryItem} ${styles.backend}`}>Back End</Link>
    </div>
  )
}
