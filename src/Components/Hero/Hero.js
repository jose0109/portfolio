import React from 'react'
import styles from './hero.module.css'
import avatar from '../../assets/avatar.png'
import main_img from '../../assets/main_img.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles['hero__title']}>
            <h1>Front-end Web Developer</h1>
        </div>
        <div className={styles['hero__description']}>
            <h3>I provide coding solutions tailored to your business needs.</h3>
        </div>  
        <div className={styles['hero__avatar']}>
            <img src={avatar}></img>
        </div>
        <div className={styles['hero__img']}>
            <img src={main_img}></img>
        </div>
    </div>
  )
}

export default Hero