import styles from './GradientButton.module.css';
import Button from 'components/Button';
export default function GradientButton(props) {
  return <Button styles={styles['gradient-btn']}>{props.children}</Button>;
}
