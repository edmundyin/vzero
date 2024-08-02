import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './navbar.module.css';

const Navbar: React.FC = () =>{

    const [cartOpen, setCartOpen] = useState(false);
    const handleShowCart = () => setCartOpen(true);
    const handleCloseCart = () => setCartOpen(false);

    const [menuOpen, setMenuOpen] = useState(false);
    const handleShowMenu = () => setMenuOpen(true);
    const handleCloseMenu = () => setMenuOpen(false);

    return(
        <>
            {cartOpen && <div className={styles.overlay} onClick={handleCloseCart}></div>}
            <div className={`${styles.cart} ${cartOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h1 className={styles.title}> YOUR CART </h1>
                        <div className={styles.Xmark} onClick={handleCloseCart}> 
                            <FontAwesomeIcon icon={faXmark} /> 
                        </div>
                    <h2 className={styles.checkout}> CHECKOUT </h2>
                </div>
            </div>

            {menuOpen && <div className={styles.overlay} onClick={handleCloseMenu}></div>}
            <div className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                        <div className={styles.menuX} onClick={handleCloseMenu}> 
                            <FontAwesomeIcon icon={faXmark} /> 
                        </div>
                </div>
                <div className={styles.menuList}> 
                        <ul className={styles.list}>
                            <Link className={styles.link} to="/home">
                                <li className={styles.menuOptions}>HOME</li>
                            </Link>
                            <Link className={styles.link} to="/shop">
                                <li className={styles.menuOptions}>SHOP</li>
                            </Link>
                            <a href="https://vzerogallery.web.app/" target="_blank">
                                <li className={styles.menuOptions}>ABOUT</li>
                            </a>
                            
                        </ul> 
                    </div>
            </div>

            <div className={styles.container}>
                <div className={styles.home}>
                    <div className={styles.vzero}>
                        <Link className={styles.link} to="/home">
                            <img className={styles.logo} src="https://firebasestorage.googleapis.com/v0/b/vzero-1aef8.appspot.com/o/images%2Fvzeroblackoutline.png?alt=media" draggable="false" />
                        </Link>
                    </div>
                    {!cartOpen && (
                        <div className={styles.faShoppingCart} onClick={handleShowCart}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                    )}
                    {!menuOpen && (
                        <div className ={styles.faBars} onClick={handleShowMenu}>
                        <FontAwesomeIcon icon={faBars} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;