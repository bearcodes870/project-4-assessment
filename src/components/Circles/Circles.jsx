import styles from './Circles.module.css';

const Circles = (props, idx) => (
    <div className={styles.Circles}>  
        {props.selButton.map(selButton =>
            <div className={props.selButtonIdx == `${selButton}` ? `${styles.selected}` : ''} key={idx}>{selButton}</div>
            )}
    </div>
  );
  
  export default Circles;
  