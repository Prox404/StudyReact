import styles from './styles.module.css';

const Div100vh = ({children}) => {
  return (
    <div className={styles.div100vh}>
      {children}
    </div>
  );
}

export default Div100vh;