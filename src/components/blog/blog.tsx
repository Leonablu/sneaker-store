import { FC } from 'react';
import { BlogCard } from '..';
import { SubscriptionUI } from '../ui';
import styles from './blog.module.scss';

export const Blog: FC = () => (
  <>
    <section className={styles.blog}>
      <div className={styles.blog_cards}>
        <BlogCard post={posts[0]} />
        <BlogCard post={posts[1]} />
      </div>
      <SubscriptionUI />
    </section>
  </>
);

const posts = [
  {
    id: '1',
    createdAt: '15 августа 2019',
    updatedAt: '1',
    title: 'кроссовки nike air max 270',
    slug: '1',
    description:
      'Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.',
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
  },
  {
    id: '2',
    createdAt: '15 августа 2019',
    updatedAt: '2',
    title: 'Кроссовки Nike Air Max 720 Saturn',
    slug: '2',
    description:
      'Nike Air Max 720 Saturn представлен в совершенно новой цветовой гамме Black / Team Orange.',
    body: '2',
    favoritesCount: 5316,
    images: 'https://i.pravatar.cc/',
    tags: ['2'],
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
  }
];
