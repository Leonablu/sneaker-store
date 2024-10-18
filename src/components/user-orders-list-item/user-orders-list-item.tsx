import { FC } from 'react';
import { TOrder } from '../../types';
import styles from './user-orders-list-item.module.scss';
import { CheckboxUI } from '../ui-kit';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return formattedDate.replace(' г.', '');
};

type TUserOrdersListItemProps = {
  order: TOrder;
};

export const UserOrdersListItem: FC<TUserOrdersListItemProps> = ({ order }) => (
  <button type='button' className={styles.card}>
    <span>{order.number}</span>
    <span>{formatDate(order.createdAt)}</span>
    <span>{order.items.length}</span>
    <span>{order.total}</span>
    <span>
      <CheckboxUI
        disabled
        checked={order.status === 'PENDING' ? false : true}
      />
    </span>
    <span>
      <CheckboxUI disabled checked />
    </span>
  </button>
);
