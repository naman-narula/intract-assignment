import styles from 'App.module.css';
import Button from 'components/Button';
import GradientButton from 'components/GradientButton';

import topMatrix from 'assets/topMatrix.png';
import botomMatrix from 'assets/bottomMatrix.png';
import producImage from 'assets/productImage.png';
import ArrowImage from 'assets/Arrow_right.png';
import GroupShare from 'assets/group_share.png';
import Navbar from 'components/Navbar';
function App() {
  return (
    <div className='App'>
      <section className={styles.background}>
        <Navbar />
        <div className={styles['top-matrix-image']}>
          <img src={topMatrix} alt='' />
        </div>
        <div className={styles['heading-container']}>
          <h1>
            Growth tools built by the best minds in <span className={styles['theme-gradient']}>web3</span>
          </h1>
        </div>
        <div className={styles['sub-header-container']}>
          <p>
            We're a community of growth leaders bridging the science of data with the art of web3 marketing.
          </p>
        </div>
        <div className={styles['button-container']}>
          <GradientButton>
            Book a demo
            <img className={styles['img-btn']} src={ArrowImage} alt=''></img>
          </GradientButton>
          <Button styles={styles['btn']}>
            Join community
            <img className={styles['img-btn']} src={GroupShare} alt='' />
          </Button>
        </div>
        <div className={styles['image-overlay-container']}>
          <div className={styles['product-image']}>
            <img src={producImage} alt='product' />
          </div>
          <div className={styles['bottom-matrix']}>
            <img src={botomMatrix} alt='' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
