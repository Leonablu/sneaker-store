import { FC } from 'react';
import { Carousel } from '../../components/ui-kit/carousel';
import styles from './main-page.module.scss';
import { GuaranteesUI } from '../../components/ui';
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
import { useSelector } from '../../services/store';
import { getListProduct } from '../../services/slices/products/products';
import { SkeletonUI } from '../../components/ui/skeleton';

export const MainPage: FC = () => {
  const products = useSelector(getListProduct);
  if (!products) {
    return <SkeletonUI/>;
  }
  return (
    <>
      <h2 className={styles.header}>Лучшие из лучших</h2>
      <Carousel type='card' cards={products} />
      <GuaranteesUI />
      <h2 className={styles.header}>Блог</h2>
      <h2 className={styles.header}>Бренды</h2>
      <Carousel type='brand' />
    </>
  );
};
