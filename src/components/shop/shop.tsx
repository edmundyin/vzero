import Navbar from "../navbar/navbar";
import styles from "./shop.module.css"
// import { products } from "../../products";

const Shop: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <Navbar />
                <div className={styles.kaizenPants}>
                    <img src="/components/pictures/IMG_4070.jpeg" />
                    <div className={styles.information}>
                        <div className={styles.title}>
                            <h1>KAIZEN PANTS</h1>
                            <p className={styles.price}>$89</p>
                        </div>
                        <div className={styles.description}>
                            <ul className={styles.list}>
                                <li>Japanese Imported Cotton</li>
                                <li>95% Cotton 5% Polyurethane</li>
                                <li>8.7 oz, lightweight and flexible </li>
                                <li>Stitched VZERO Patch on Back Pocket </li>
                                <li>Manufactured in LA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;