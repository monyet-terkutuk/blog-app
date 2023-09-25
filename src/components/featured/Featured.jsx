import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b className={styles.bold}>Selamat Datang!</b> Di tempat membaca hal hal yang saya pikirkan :)</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odit corrupti cumque, enim doloremque sed a eligendi ratione dolores ea quae iusto tempore dolorem deserunt amet impedit provident quisquam? Quas!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
