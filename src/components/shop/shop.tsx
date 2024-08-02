import { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import styles from "./shop.module.css";

type Size = 'XS' | 'S' | 'M' | 'L';

const renderBuyButton = (selectedSize: Size) => {
    const stripeBuyButtons: Record<Size, string> = {
        XS: "buy_btn_1Pj9TtKNON36NeacspBcKbVE",
        S: "buy_btn_1Pj9WsKNON36NeacuJFGAlxh",
        M: "buy_btn_1Pj9ZHKNON36NeacmpPZj2s4",
        L: "buy_btn_1Pj9ZoKNON36Neac8ohtPBCN"
    };

    return (
        <stripe-buy-button
            key={stripeBuyButtons[selectedSize]} 
            buy-button-id={stripeBuyButtons[selectedSize]}
            publishable-key="pk_live_51PMbCNKNON36Neac5zYKGMaTnTxUCeEWMtodr4GZr45uQebcUir4saPrAy1uswxovwGPn74IGpQE18err2jTuWhq001OsSTEO5"
        ></stripe-buy-button>
    );
}

const Shop: React.FC = () => {
    const [selectedSize, setSelectedSize] = useState<Size | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://js.stripe.com/v3/buy-button.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [selectedSize]);

    return (
        <div className={styles.container}>
            <div>
                <Navbar />
                <div className={styles.kaizenPants}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/vzero-1aef8.appspot.com/o/images%2Ftest.jpg?alt=media" />
                    <div className={styles.information}>
                        <div className={styles.title}>
                            <h1 className={styles.itemTitle}>KAIZEN PANTS</h1>
                            <p className={styles.price}>$89</p>
                        </div>
                        <div className={styles.sizes}>
                            <h1 className={styles.selectSize}> SELECT SIZE: </h1>
                            {['XS', 'S', 'M', 'L'].map(size => (
                                <div
                                    key={size}
                                    className={styles.size}
                                    onClick={() => setSelectedSize(size as Size)}
                                    style={{ opacity: selectedSize === size ? 1 : 0.5 }}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                        <div className={styles.sizeChart}>
                            <img className={styles.image} src="https://firebasestorage.googleapis.com/v0/b/vzero-1aef8.appspot.com/o/images%2FIMG_2900.jpeg?alt=media" draggable="false" />
                        </div>
                        <div className={styles.addToCart}>
                            {selectedSize ? (
                                renderBuyButton(selectedSize)
                            ) : (
                                <h1 className={styles.cart}> SELECT SIZE </h1>
                            )}
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
