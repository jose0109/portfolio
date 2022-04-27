import React from 'react'
import Card from './Card'
import styles from './work.module.css'
import chiquitrucks from '../../assets/projects/chiquitrucks.png'

const Work = () => {
  return (
    <div className={styles.work}>
        <h2 className={styles.title}>My Recent Work</h2>
        <p>Here are a few projects I've worked on recently.</p>
        <div className={styles.cards}>
            <Card text='Landing page and sales and client control for children attractions business' backgroundImage={chiquitrucks} link="https://google.com"/>
            <Card text='Landing page and sales and client control for children attractions business' backgroundImage={chiquitrucks} link="https://google.com"/>
            <Card text='Landing page and sales and client control for children attractions business' backgroundImage={chiquitrucks} link="https://google.com"/>
        </div>
    </div>
  )
}

export default Work