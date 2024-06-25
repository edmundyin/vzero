import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './navbar.module.css';

const Navbar: React.FC = () =>{

    const [cartOpen, setCartOpen] = useState(false);
    const handleShowCart = () => setCartOpen(true);
    const handleCloseCart = () => setCartOpen(false);

    return(
        <>
            {cartOpen && <div className={styles.overlay} onClick={handleCloseCart}></div>}
            <div className={`${styles.cart} ${cartOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h1 className={styles.title}> YOUR CART </h1>
                        <div className={styles.Xmark} onClick={handleCloseCart}> 
                            <FontAwesomeIcon icon={faXmark} /> 
                        </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.home}>
                    <div className={styles.vzero}>
                        <Link className={styles.link} to="/home">vzero</Link>
                    </div>
                    {!cartOpen && (
                        <div className={styles.faShoppingCart} onClick={handleShowCart}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                    )}
                    <div className ={styles.faBars}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;