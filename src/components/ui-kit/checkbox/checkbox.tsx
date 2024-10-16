import { FC } from 'react';
import styles from './checkbox.module.scss';

type TCheckboxProps = {
  checked?: boolean;
  disabled?: boolean;
};
export const CheckboxUI: FC<TCheckboxProps> = ({ checked, disabled }) => (
  <label>
    <input type='checkbox' defaultChecked={checked} disabled={disabled} />
    <span className={styles.custom_checkbox} />
  </label>
);
