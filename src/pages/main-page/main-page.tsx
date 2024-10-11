import { FC } from 'react';
import { Carousel } from '../../components/ui-kit';
import * as images from '../../assets/images';
import styles from './main-page.module.scss';

export const MainPage: FC = () => (
  <>
    <h2 className={styles.header}>Бренды</h2>
    <Carousel cards={brands} visibleCount={6} />
  </>
);

const brands = [
  { src: images.porshe, alt: 'label brand porse' },
  { src: images.newBalance, alt: 'label brand new Balance' },
  { src: images.nike, alt: 'label brand nike' },
  { src: images.puma, alt: 'label brand puma' },
  { src: images.vans, alt: 'label brand vans' },
  { src: images.reebok, alt: 'label brand reebok' }
];
