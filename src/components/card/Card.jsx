import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

export const Card = () => {
  return (
      <div className={styles.container}>
          <div className={styles.imageContainer}>
              <Image src="/p1.jpeg" alt='image' fill className={ styles.image } />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>30.09.2023 - </span>
                <span className={styles.category}>Back End</span>
            </div>
            <Link href='/'>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consequuntur praesentium reiciendis quaerat architecto voluptates facere. Commodi, veniam. Explicabo voluptas reprehenderit deserunt voluptatibus similique dolor iusto, pariatur et delectus cumque.</p>
            <Link href='/' className={styles.link}>Read More</Link>
          </div>

    </div>
  )
}
