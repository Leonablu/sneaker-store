import { FC, memo } from 'react';
import styles from './order.module.css';
import { BasketItemUI } from '../basket-item';
import { DeliveryDetailsUI } from '../delivery-details';
import { UserInfoUI } from '../user-info';
import { DeliveryTypeOptionUI } from '../delivery-type-option';

export const OrderUI: FC = memo((items) => (
  <>
    {/* Надо уточнить можно ли тут вызывать другие UI ятобы отобразить сразу и на странице и в модалке
<BasketItemUI></BasketItemUI>
<DeliveryDetailsUI>
    <UserInfoUI>
        <DeliveryTypeOptionUI>
*/}
  </>
));
