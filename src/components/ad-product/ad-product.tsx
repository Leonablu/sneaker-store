import { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { TAdProductProps } from './type';
import { SubmitButton } from '../ui-kit';
import { arrow } from '../../assets/svg';
import { accent } from '../../assets/svg';
import styles from './ad-product.module.scss';
import arrow_button from '../../assets/svg/arrow-button.svg';

export const AdProduct: FC<TAdProductProps> = ({ productList }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productList.length);
  };

  const selectProduct = (index: number) => {
    setCurrentIndex(index);
  };

  if (productList.length === 0) return <p>Товары не найдены</p>;

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.product_details}>
          <NavLink to={`/product/${productList[currentIndex].id}`}>
            <h1 className={styles.title}>{productList[currentIndex].name}</h1>
          </NavLink>
          <p className={styles.description}>
            {productList[currentIndex].description}
          </p>
          <SubmitButton
            text='Смотреть все'
            onClick={() => navigate('/shoes')}
            className={styles.button}
          />
        </div>
        <div className={styles.image}>
          <img
            src={productList[currentIndex].images}
            alt={productList[currentIndex].name}
          />
        </div>
        <div className={styles.accent}>
          <img src={accent} />
        </div>
        <button className={styles.arrow_button} onClick={nextProduct}>
          <img
            src={arrow}
            alt='Следующий продукт'
            className={styles.arrow_image}
          />
        </button>
      </div>
      <div className={styles.thumbnails_container}>
        {productList.map(
          (product, index) =>
            index !== currentIndex && (
              <div
                key={product.id}
                className={styles.thumbnail}
                onClick={() => selectProduct(index)}
              >
                <img
                  src={product.images}
                  alt={product.name}
                  className={styles.thumbnail_image}
                />
                <p className={styles.thumbnail_description}>{product.name}</p>
                <NavLink
                  to={`/product/${product.id}`}
                  className={styles.thumbnail_button}
                >
                  <img src={arrow_button} />
                </NavLink>
              </div>
            )
        )}
      </div>
    </div>
  );
};
