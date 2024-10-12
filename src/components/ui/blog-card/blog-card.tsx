import { FC, memo } from 'react';
import styles from './blog-card.module.scss';
import { TBlogCardProps } from './type';

export const BlogCardUI: FC<TBlogCardProps> = memo(({ post }) => (
  <div className={styles.card}>
    <div className={styles.image_container}>
      <img src={`${post.images}`} alt='' className={styles.image} />
    </div>
    <div className={styles.card_info}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.description}>{post.description}</p>
      <div className={styles.info}>
        <span>{post.createdAt}</span>
        <div className={styles.views}>
          <svg
            width='20'
            height='12'
            viewBox='0 0 20 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 0.0390625C6.17879 0.0390625 2.71351 2.12968 0.15649 5.52541C-0.0521632 5.80361 -0.0521632 6.19228 0.15649 6.47048C2.71351 9.8703 6.17879 11.9609 10 11.9609C13.8212 11.9609 17.2865 9.8703 19.8435 6.47457C20.0522 6.19637 20.0522 5.8077 19.8435 5.5295C17.2865 2.12968 13.8212 0.0390625 10 0.0390625ZM10.2741 10.1976C7.73755 10.3572 5.64284 8.26653 5.80239 5.72588C5.93331 3.63117 7.63118 1.9333 9.72589 1.80238C12.2625 1.64283 14.3572 3.73345 14.1976 6.2741C14.0626 8.36472 12.3647 10.0626 10.2741 10.1976ZM10.1473 8.25835C8.78081 8.34427 7.65163 7.21918 7.74164 5.85271C7.81119 4.72353 8.72763 3.81118 9.85681 3.73754C11.2233 3.65162 12.3525 4.77671 12.2625 6.14318C12.1888 7.27646 11.2724 8.1888 10.1473 8.25835Z'
              fill='#B3C0D2'
            />
          </svg>
          <span>{post.favoritesCount}</span>
        </div>
      </div>
    </div>
  </div>
));
