import React from 'react'
import styles from './courses.module.css'
import Tile from './Tile'
import academind from '../../assets/courses/academind2.jpeg'
import fcc from '../../assets/courses/fcc2.png'
import udemy from '../../assets/courses/udemy.jpeg'

const Courses = () => {
  return (
    <div className={styles.courses}>
        <Tile logo={academind} title="ReactJS" description="ReactJS the complete guide, including Hooks,React Routing, Animations, NextJS, and more.  " icon={<i class='bx bx-loader-alt bx-spin bx-rotate-90' ></i>}status="Ongoing" link="https://academind.com/courses"linkText="academind.com"/>
        <Tile logo={fcc} title="Responsive Web Design" description="Responsive Web design certification, including HTML, CSS, Grid, Flexbox, Media Queries" icon={<i class="bx bx-check bx-tada bx-rotate-90"></i>}status="Completed"link="https://www.freecodecamp.org/learn/responsive-web-design/" linkText="freecodecamp.org"/>
        <Tile logo={udemy} title="Python & Django" description="Python and Django Web Develompent Bootcamp, HTML, CSS, JS, Python, Django" icon={<i class="bx bx-check bx-tada bx-rotate-90"></i>}status="Completed"link="https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp"linkText="udemy.com"/>
    </div>
  )
}

export default Courses