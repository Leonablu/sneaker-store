import { FC } from 'react';

type TDeliveryTypeOptionProps = {
  deliveryType: string;
  description: string;
  price: number;
};

export const DeliveryTypeOption: FC<TDeliveryTypeOptionProps> = ({
  deliveryType,
  description,
  price
}) => {
  console.log(deliveryType);
  return <></>;
};
