import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

const Navbar: React.FC = () =>{

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
                    <div className={styles.faShoppingCart}>
                        <Link className={styles.link} to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                    </div>
                    <div className={styles.faIdCard}>
                            <Link className={styles.link} to="/userinfo">
                                <FontAwesomeIcon icon={faIdCard} />
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;