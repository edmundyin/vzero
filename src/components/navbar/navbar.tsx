import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faIdCard, faClipboardQuestion } from '@fortawesome/free-solid-svg-icons';
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
                    <h1 className={styles.vzero}>
                        <Link className={styles.link} to="/">vzero</Link>
                    </h1>
                    <div className={styles.navIcons}>
                        <i className={styles.FAQ}>
                            <Link className={styles.link} to="/faq">
                                <FontAwesomeIcon icon={faClipboardQuestion}/>
                            </Link>
                            </i>
                        <i className={styles.shoppingCart}>
                            <Link className={styles.link} to="/cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            </i>
                        <i className={styles.personalID}>
                            <Link className={styles.link} to="/user">
                                <FontAwesomeIcon icon={faIdCard} />
                            </Link>
                            </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;