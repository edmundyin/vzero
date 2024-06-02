import styles from './shoppingcart.module.css'
import Navbar from '../navbar/navbar';
import * as React from 'react';


const Cart: React.FC = () => {
    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.buyKaizen}>
                    <script async
                        src="https://js.stripe.com/v3/buy-button.js">
                    </script>
                    <stripe-buy-button
                        buy-button-id="buy_btn_1PMc2mKNON36NeacX1FJW6NR"
                        publishable-key="pk_live_51PMbCNKNON36Neac5zYKGMaTnTxUCeEWMtodr4GZr45uQebcUir4saPrAy1uswxovwGPn74IGpQE18err2jTuWhq001OsSTEO5"
                    >
                    </stripe-buy-button>
                </div>
            </div>
        </div>
    );
}

export default Cart;