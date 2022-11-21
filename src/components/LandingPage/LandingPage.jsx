import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css'
import dogImage from '../../assets/74008.jpg'

export default function LandingPage(){
    return(
        <Fragment>
            <div className={styles.hero}>
                <h1 className={styles.title}>PI Dogs Soy Henry</h1>
                <Link to='/home'>
                    <button className={styles.bubblyButton}>Let's Woof</button>
                </Link>
            </div>
            <img
              id="dogImage"
              src={dogImage}
              alt="a happy dog"
              className={styles.dogImage}
            />
        </Fragment>
    )
}