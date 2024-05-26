import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.module.css';

const Landing: React.FC = () => {
  return (
    <div className={styles.vidBg}>
      <video autoPlay loop muted>
        <source src="vzerobg.mp4" type="video/mp4" />
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