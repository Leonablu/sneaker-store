import { FC, memo } from 'react';
import styles from './blog-card.module.scss';
import { TBlogCardProps } from './type';
import { formatNumber } from '../../../utils/utils';
import eye from '../../../assets/svg/eye.svg';

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
          <img src={eye} />
          <span>{formatNumber(post.favoritesCount)}</span>
        </div>
      </div>
    </div>
  </div>
));
