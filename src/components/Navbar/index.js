import Button from 'components/Button';
import GradientButton from 'components/GradientButton';

import styles from './Navbar.module.css';
import brandLogo from 'assets/brandLogo.png';
import ArrowImage from 'assets/Arrow_right.png';
import TwitterIcon from 'assets/Social_twitter.png';
import LinkedInIcon from 'assets/Social_LinkedIn.png';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.branding}>
        <img src={brandLogo} alt='intract logo' />
        <p>Intract</p>
      </div>
      <div className={styles['right-container']}>
        <div>
          <Button styles={styles.padding}>
            <img src={TwitterIcon} alt='follow on twitter' />
          </Button>
        </div>
        <div>
          <Button styles={styles.padding}>
            <img src={LinkedInIcon} alt='follow on LinkedIn' />
          </Button>
        </div>
        <div>
          <GradientButton>
            Book a Demo
            <img className={styles['img-btn']} src={ArrowImage} alt='' />
          </GradientButton>
        </div>
      </div>
    </nav>
  );
}
