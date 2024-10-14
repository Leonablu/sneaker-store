import { FC } from 'react';
import styles from './blog-item-page.module.scss';
import { SubmitButton } from '../../components/ui-kit';
import { NavLink } from 'react-router-dom';
import { formatNumber } from '../../utils/utils';
import eye from '../../assets/svg/eye-blue.svg';

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
        <div>
          <img src={eye} className={styles.svg} />
          <span>{formatNumber(post.favoritesCount)}</span>
        </div>
      </div>
      <img
        src={post.images}
        alt=''
        className={`${styles.image}, ${styles.image_big}`}
      />
      <div className={styles.description_block}>
        <p className={styles.description}>{post.description}</p>
        <img
          src={post.images}
          alt=''
          className={`${styles.image}, ${styles.image_description}`}
        />
      </div>
      <img
        src={post.images}
        alt=''
        className={`${styles.image}, ${styles.image_last}`}
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
