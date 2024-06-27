import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.module.css';

const Landing: React.FC = () => {

  return (
    <div className={styles.vidBg}>
      <video autoPlay loop muted playsInline>
        <source src="https://firebasestorage.googleapis.com/v0/b/vzero-1aef8.appspot.com/o/videos%2Fvzerobg.mp4?alt=media" type="video/mp4" />
        <source src="https://firebasestorage.googleapis.com/v0/b/vzero-1aef8.appspot.com/o/videos%2Fvzerobg.webm?alt=media" type="webm/mp4" />
      </video>
      <div className={styles.container}>
        <div className={styles.vzero}>
          <h1 className={styles.glitch}>
            <span aria-hidden="true">vzero</span>
            vzero
            <span aria-hidden="true">vzero</span>
          </h1>
        </div>
        <div id="link">
          <p className={styles.enter}>
            <Link className={styles.link} to="/home">enter here</Link>
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Landing;