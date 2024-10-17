import { FC } from 'react';
import { TAdProductProps } from '../ui/ad-product/type';
import { AdProductUI } from '../ui';

export const AdProduct: FC<TAdProductProps> = ({ productList }) => {
  return <AdProductUI productList={productList} />
};
