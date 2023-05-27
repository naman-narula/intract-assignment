import styles from './Button.module.css';

export default function Button(props) {
  return (
    <button {...props} className={`${styles.button} ${styles.shine} ${props.styles}`}>
      {props.children}
    </button>
  );
}
