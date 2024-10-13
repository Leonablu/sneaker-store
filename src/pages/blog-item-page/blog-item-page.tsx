import { FC } from 'react';
import styles from './blog-item-page.module.scss';
import classNames from 'classnames';
import { SubmitButton } from '../../components/ui-kit';
import { NavLink } from 'react-router-dom';
import { formatNumber } from '../../utils/utils';

export const BlogItemPage: FC = () => {
  //пост будем доставать из стора
  const post = {
    id: '1',
    createdAt: '15 августа 2019',
    updatedAt: '1',
    title: 'кроссовки nike air max 270',
    slug: '1',
    description:
      'Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange. Что больше всего выделяется, так это принт, используемый по всему силуэту, который вдохновлен баскетболом и выполнен в стиле аниме. Яркие оранжевые акценты на всем протяжении дополняют расцветку. Модель оснащена интересной системой застежки - оранжевая молния в виде ленты по бокам c надписью «Nike League». И конечно же бренд не забыл встроить знаменитый огромный прозрачный баллон Air Max в подошву, который видно со всех сторон.',
    body: '1',
    favoritesCount: 4416,
    images: 'https://i.pravatar.cc/',
    tags: ['1'],
    isPublished: true,
    author: {
      id: 'clucdkvk60000xjs0ryaa631e',
      email: 'admin@gmail.com',
      name: 'Максим',
      avatarPath: 'https://i.pravatar.cc/500?img=13',
      about: 'Администратор',
      phone: '+79999999999',
      roles: ['USER'],
      likes: [],
      favoritesPost: []
    }
  };

  // тут надо реализовать переход к карточке товара, о котором говорится в посте
  // однако не понятно как доставать товар, соответствующий посту
  const handleClick = () => {
    console.log(`Вы перешли на товар ${post.title}`);
  };

  return (
    <main className={styles.content}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.info}>
        <span>{post.createdAt}</span>
        <div className={styles.views}>
          <svg
            className={styles.svg}
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
          <span>{formatNumber(post.favoritesCount)}</span>
        </div>
      </div>
      <img
        src={post.images}
        alt=''
        className={classNames(styles.image, styles.image_big)}
      />
      <div className={styles.description_block}>
        <p className={styles.description}>{post.description}</p>
        <img
          src={post.images}
          alt=''
          className={classNames(styles.image, styles.image_description)}
        />
      </div>
      <img
        src={post.images}
        alt=''
        className={classNames(styles.image, styles.image_last)}
      />
      {/* <img
        src={post.images}
        alt=''
        className={classNames(styles.image, styles.image_decor)}
      /> */}
      <NavLink to='/shoes'>
        <SubmitButton text={`Посмотреть ${post.title}`} onClick={handleClick} />
      </NavLink>
    </main>
  );
};
