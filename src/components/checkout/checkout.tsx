import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/checkoutForm";

const stripePromise = loadStripe('pk_live_51PMbCNKNON36Neac5zYKGMaTnTxUCeEWMtodr4GZr45uQebcUir4saPrAy1uswxovwGPn74IGpQE18err2jTuWhq001OsSTEO5');

const Checkout:React.FC = () => {
    const options = {
        clientSecret: '{{CLIENT_SECRET}}',
      };
    
      return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      );
}

export default Checkout;