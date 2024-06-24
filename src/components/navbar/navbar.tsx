import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

const Navbar: React.FC = () =>{

    // const [cartOpen, setCartOpen] = useState(false);

    // const toggleCart = () => {
    //     setCartOpen(!cartOpen);
    // };


    // const observer = new IntersectionObserver((entries) =>{
    //     entries.forEach((entry) =>{
    //         console.log(entry);
    //         if(entry.isIntersecting){
    //             entry.target.classList.add(styles.show)
    //         }
    //         else{
    //             entry.target.classList.remove(styles.show);
    //         }
    //     });
    // });

    // const hiddenElements = document.querySelectorAll(styles.hidden);
    // hiddenElements.forEach((el) => observer.observe(el));

    return(
        <div /*className={styles.hidden}*/ >
            <div className={styles.container}>
                <div className={styles.home}>
                    <div className={styles.vzero}>
                        <Link className={styles.link} to="/home">vzero</Link>
                    </div>
                    <div className={styles.faShoppingCart} >
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                    <div className={styles.sidebar}>
                        <h1>Your Cart</h1>
                    </div>
                    <div className ={styles.faBars}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;