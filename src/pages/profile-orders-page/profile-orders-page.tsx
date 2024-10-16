import { FC } from 'react';
import styles from './profile-orders-page.module.scss';
import { UserOrdersListItem } from '../../components';
import { ProfileMenuNavigation } from '../../components/ui-kit';

export const ProfileOrdersPage: FC = () => {
  // заказы возьмем из стора
  const orders = [
    {
      id: 'clu7gjgj40000jqwt3bu0ib8f1',
      createdAt: '2021-10-02T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      number: 1,
      status: 'PENDING',
      total: 10,
      userId: 'cltckuxli00001340ytbmzfoz',
      items: [
        {
          quantity: 1,
          price: 100,
          productId: 'string'
        }
      ]
    },
    {
      id: 'clu7gjgj40000jqwt3bu0ib8f2',
      createdAt: '2019-03-07T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      number: 2,
      status: 'PENDING',
      total: 10,
      userId: 'cltckuxli00001340ytbmzfoz',
      items: [
        {
          quantity: 1,
          price: 100,
          productId: 'string'
        }
      ]
    },
    {
      id: 'clu7gjgj40000jqwt3bu0ib8f3',
      createdAt: '2019-05-13T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      number: 3,
      status: 'PENDING',
      total: 10,
      userId: 'cltckuxli00001340ytbmzfoz',
      items: [
        {
          quantity: 1,
          price: 100,
          productId: 'string'
        }
      ]
    }
  ];

  return (
    <div className={styles.content}>
      <ProfileMenuNavigation />
      <main>
        <div className={styles.head}>
          <span>Номер заказа</span>
          <span>Дата</span>
          <span>Предметов</span>
          <span>Сумма</span>
          <span>Доставлено</span>
          <span>Оплачено</span>
        </div>
        {orders.map((order) => (
          <UserOrdersListItem key={order.id} order={order} />
        ))}
      </main>
    </div>
  );
};
