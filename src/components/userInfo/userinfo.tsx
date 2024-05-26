import React from 'react';
import styles from './userinfo.module.css'
import Navbar from '../navbar/navbar';

const Userinfo: React.FC = () => {
    return (
        <div className={styles.body}>
            <Navbar />
            <div>user information</div>
        </div>
    );
};

export default Userinfo;