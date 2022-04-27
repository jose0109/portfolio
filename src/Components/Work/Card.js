import React from 'react'
import Button from '../Button/Button'
import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={styles.card}>
        <img src={props.backgroundImage}></img>
        <div className={styles['card__inner']}>
            <p>{props.text}</p>
            <Button color='white' text={props.buttonText} link={props.link} target="_blank"/>
        </div>
    </div>
  )
}

export default Card