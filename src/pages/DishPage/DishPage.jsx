import styles from './DishPage.module.css';

export const DishPage = ({children}) => {
  return (
    <main className={styles.dishPage}>
      {children}
    </main>
  );
};
export default DishPage;