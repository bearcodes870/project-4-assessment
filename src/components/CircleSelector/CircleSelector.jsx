import styles from './CircleSelector.module.css';

const CircleSelector = (props, idx) => (
    <div className={styles.CircleSelector}>
        <div>
            {props.selButton.map(selButton =>
            
            <button className={styles.CircleSelector} key={idx} onClick={() => props.handleClick(selButton)}>Select Circle {selButton}</button>
            )}
        </div> 
    </div>
  );
  
  export default CircleSelector;
  