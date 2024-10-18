import { FC } from 'react';
import { TPost } from '../../types';
import { NavLink } from 'react-router-dom';
import styles from './blog-card.module.scss';
import { formatNumber } from '../../utils/utils';
import eye from '../../assets/svg/eye.svg';

type TBlogCardProps = {
  post: TPost;
};

export const BlogCard: FC<TBlogCardProps> = ({ post }) => {
  const handleClick = () => {
    //тут будет сохраняться в стор post
  };

  return (
    <>
      <NavLink to={`/blog/post/${post.id}`} onClick={() => handleClick()}>
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
      </NavLink>
    </>
  );
};
