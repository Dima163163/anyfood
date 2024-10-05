import classnames from 'classnames';
import Button from '../Button/Button';
import styles from './Counter.module.css';

export const Counter = ({
  count,
  increment,
  decrement,
  styleTypeWrapper,
  sizeViewVariant,
  colorViewVariant,
  styleViewVariant
}) => {
  return (
    <div
      className={classnames({
        [styles.default]: styleTypeWrapper === 'default'
      })}
    >
      <Button
        onClick={increment}
        sizeViewVariant={sizeViewVariant}
        text='+'
        colorViewVariant={colorViewVariant}
        styleViewVariant={styleViewVariant}
      />
      {count}
      <Button
        onClick={decrement}
        sizeViewVariant={sizeViewVariant}
        text='-'
        colorViewVariant={colorViewVariant}
        styleViewVariant={styleViewVariant}
      />
    </div>
  );
};
