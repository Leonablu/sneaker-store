import { FC, memo, useEffect } from 'react';
import styles from './carousel.module.scss';
import * as images from '../../../assets/images/index';

import { TProduct } from '../../../types';

import { CardProduct } from '../card';
import Splide from '@splidejs/splide';

export type TCarousel = {
  type: 'card' | 'brand';
  cards?: TProduct[];
};

const brands = [
  { src: images.porshe, alt: 'label brand porse' },
  { src: images.newBalance, alt: 'label brand new Balance' },
  { src: images.nike, alt: 'label brand nike' },
  { src: images.puma, alt: 'label brand puma' },
  { src: images.vans, alt: 'label brand vans' },
  { src: images.reebok, alt: 'label brand reebok' }
];

const options = {
  type: 'loop',
  perPage: 4,
  perMove: 1,
  arrows: true,
  pagination: false,
  padding: { left: 25 },
  breakpoints: {
    360: {
      perPage: 2,
      pagination: true,
      arrows: false
    }
  }
};

const brandsOptions = {
  type: 'loop',
  perPage: 6,
  perMove: 1,
  pagination: false,

  breakpoints: {
    360: {
      perPage: 8,
      pagination: true,
      arrows: false
    }
  }
};
export const Carousel: FC<TCarousel> = memo(({ type, cards }) => {
  useEffect(() => {
    if (cards && cards.length > 0) {
      new Splide('.splide', options).mount();
      new Splide('.splide_brand', brandsOptions).mount();
    }
  }, [cards]);

  return (
    <>
      {type === 'card' ? (
        <section aria-label='splide' className={`${styles.splide} splide`}>
          <div className='splide__track'>
            <ul className={`${styles.splide__list} splide__list`}>
              {cards?.map((product) => (
                <li className='splide__slide' key={product.id}>
                  <CardProduct
                    name={product.name}
                    images={product.images}
                    price={product.price}
                    slug={product.slug}
                    tags={product.tags}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : type === 'brand' ? (
        <section aria-label='splide' className='splide splide_brand'>
          <div className='splide__track'>
            <ul className={`${styles.splide__list} splide__list`}>
              {brands.map((brand, index) => (
                <li className='splide__slide' key={index}>
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className={styles.brand}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
});
