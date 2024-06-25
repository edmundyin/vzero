import Navbar from "../navbar/navbar";
import styles from "./shop.module.css"
import { useState } from "react";
// import { products } from "../../products";

const Shop: React.FC = () => {

    const [selected, setSelected] = useState("opacity");

    return (
        <div className={styles.container}>
            <div>
                <Navbar />
                <div className={styles.kaizenPants}>
                    <img src="/components/pictures/test.jpg" />
                    <div className={styles.information}>
                        <div className={styles.title}>
                            <h1>KAIZEN PANTS</h1>
                            <p className={styles.price}>$89</p>
                        </div>
                        <div className={styles.sizes}>
                            <h1 className={styles.selectSize}> SELECT SIZE: </h1>
                            <div className={styles.size}>XS</div>
                            <div className={styles.size}>S</div>
                            <div className={styles.size}>M</div>
                            <div className={styles.size}>L</div>
                        </div>
                        <div className={styles.sizeChart}>
                            <img className={styles.image} src="/components/pictures/sizechart.png" draggable="false" />
                        </div>
                        <div className={styles.addToCart}>
                            <h1 className={styles.cart}> ADD TO CART </h1>
                        </div>
                        <div className={styles.description}>
                            <ul className={styles.list}>
                                <li>JAPANESE IMPORTED COTTON </li>
                                <li>95% COTTON 5% POLYURETHANE</li>
                                <li>8.7 oz, LIGHTWEIGHT AND FLEXIBLE </li>
                                <li>STITCHED VZERO PATCH </li>
                                <li>MANUFACTURED IN LA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;