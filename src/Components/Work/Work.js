import React from 'react'
import Card from './Card'
import styles from './work.module.css'
import chiquitrucks from '../../assets/projects/chiquitrucks.png'
import umy from '../../assets/projects/UMY.png'
import food from '../../assets/projects/food.png'

const Work = () => {
  return (
    <div className={styles.work}>
        <h2 className={styles.title}>My Recent Work</h2>
        <p>Here are a few projects I've worked on recently.</p>
        <div className={styles.cards}>
            <Card text='Landing page for a marketing agency' backgroundImage={umy} buttonText="Coming Soon"/>
            <Card text='Landing page and sales and client control for children attractions business' backgroundImage={chiquitrucks} link="https://protected-mesa-38972.herokuapp.com" buttonText="Visit Website"/>
            <Card text='Food order web app, using ReactJS and Firebase' backgroundImage={food} link="https://dry-badlands-11308.herokuapp.com" buttonText="Visit Website"/>
        </div>
    </div>
  )
}

export default Work