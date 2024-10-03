import classnames from 'classnames';
import Button from '../Button/Button';
import styles from './Counter.module.css';

export const Counter = ({ count, increment, decrement, styleTypeWrapper, typeBtn}) => {
  return (
    <div className={classnames(
      {
        [styles.wrapperCounterMenu]: styleTypeWrapper === 'wrapperCounterMenu',
        [styles.ratingWrapper]: styleTypeWrapper === 'ratingWrapper',
      }
    )}>
      <Button onClick={increment} typeBtn={typeBtn} text="+"/>
      {count}
      <Button onClick={decrement} typeBtn={typeBtn} text="-"/>
    </div>
  );
};
