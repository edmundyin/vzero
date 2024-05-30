import React, { useState } from 'react';
import styles from './userinfo.module.css'
import Navbar from '../navbar/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const Userinfo: React.FC = () => {

    const [action, setAction] = useState("login");

    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.poetsen}>{action}</div>
                    <div className={styles.underline}></div>
                </div>
                <div className={styles.inputs}>
                    {action==="login" ? <div></div> : <div className={styles.input}>
                        <i className={styles.image}> <FontAwesomeIcon icon={faUser}/></i>
                        <input type="text" placeholder="name"/>
                    </div>}
                    <div className={styles.input}>
                        <i className={styles.image}> <FontAwesomeIcon icon={faEnvelope}/></i>
                        <input type="email" placeholder="email"/>
                    </div>
                    <div className={styles.input}>
                        <i className={styles.image}> <FontAwesomeIcon icon={faKey}/></i>
                        <input type="password" placeholder="password"/>
                    </div>
                </div>
                {action==="sign up" ? <div></div> : 
                    <div className={styles.forgotPassword}><span>forgot password?</span></div>}
                <div className={styles.submitContainer}>
                    <div className={`${styles.submit} ${action === "login" ? styles.gray : ''}`} onClick={()=>{setAction("sign up")}}>sign up</div>
                    <div className={`${styles.submit} ${action === "sign up" ? styles.gray: ''}`} onClick={()=>{setAction("login")}}>login</div>
                </div>
            </div>
        </div>
    );
};

export default Userinfo;