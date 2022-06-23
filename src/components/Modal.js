import classes from './Modal.module.css';

import Card from './Card';

import hero from '../images/illustration-hero.svg';
import iconMusic from '../images/icon-music.svg';

const Modal = () => {
  return (
    <Card>
      <img src={hero} alt="hero" />

      <h1>Order Summary</h1>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

      <div className={classes.plan}>
        <div className={classes.plan__left}>
          <img src={iconMusic} alt="icon music" />
          <div className={classes.plan__left__text}>
            <div className={classes.plan__left__text__title}>Annual Plan</div>
            <div className={classes.plan__left__text__price}>$59.99/year</div>
          </div>
        </div>

        <div className={classes.plan__right}>
          <a href="#">Change</a>
        </div>
      </div>

      <button className={classes.plan__proceedBTN}>Proceed to Payment</button>
      <button className={classes.plan__cancelBTN}>Cancel Order</button>


    </Card>
  )
}

export default Modal;