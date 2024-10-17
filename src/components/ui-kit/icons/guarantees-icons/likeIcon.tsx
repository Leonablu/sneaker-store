import { FC, memo } from 'react';
import { IconProps } from '../type';
import styles from './guarantees-icons.module.scss';

export const LikeIcon: FC<IconProps> = memo(({ widthIcon, heightIcon }) => (
  <>
    <div className={styles.icon_container}>
      <svg
        width={widthIcon}
        height={heightIcon}
        viewBox='0 0 144 144'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='72' cy='72' r='72' fill='#B3C0D2' />
        <path
          d='M108.55 79.3873C110.189 77.2961 110.975 75.0544 110.875 72.7457C110.775 70.2028 109.637 68.212 108.7 66.9908C109.788 64.2806 110.206 60.0146 106.575 56.7022C103.916 54.2765 99.3986 53.189 93.1418 53.4902C88.7419 53.6909 85.0615 54.5107 84.9109 54.5441H84.8942C84.0577 54.6947 83.1711 54.8787 82.2677 55.0795C82.2008 54.0088 82.3848 51.3488 84.3588 45.3597C86.701 38.233 86.5671 32.7792 83.9239 29.1322C81.1468 25.3011 76.7135 25 75.4086 25C74.1539 25 72.9996 25.5186 72.1798 26.4722C70.3229 28.6303 70.5404 32.6119 70.7746 34.4521C68.5663 40.3743 62.3764 54.8954 57.1401 58.9272C57.0397 58.9941 56.9561 59.0778 56.8724 59.1614C55.3333 60.7842 54.2961 62.5408 53.5935 64.0799C52.6064 63.5445 51.4856 63.2434 50.2811 63.2434H40.0761C36.2284 63.2434 33.1167 66.3718 33.1167 70.2028V97.3881C33.1167 101.236 36.2451 104.348 40.0761 104.348H50.2811C51.77 104.348 53.1585 103.879 54.2961 103.076L58.2275 103.545C58.8298 103.628 69.5366 104.983 80.5278 104.766C82.5186 104.916 84.3923 105 86.1322 105C89.1267 105 91.7365 104.766 93.9113 104.297C99.0305 103.21 102.527 101.035 104.3 97.8398C105.655 95.3973 105.655 92.9716 105.438 91.4324C108.767 88.4212 109.353 85.092 109.235 82.7499C109.169 81.3948 108.867 80.2405 108.55 79.3873ZM40.0761 99.8306C38.721 99.8306 37.6336 98.7265 37.6336 97.3881V70.1861C37.6336 68.831 38.7378 67.7436 40.0761 67.7436H50.2811C51.6361 67.7436 52.7235 68.8478 52.7235 70.1861V97.3714C52.7235 98.7265 51.6194 99.8139 50.2811 99.8139H40.0761V99.8306ZM104.267 77.4299C103.564 78.166 103.43 79.2869 103.966 80.1568C103.966 80.1736 104.652 81.3446 104.735 82.9506C104.852 85.1422 103.798 87.0828 101.59 88.739C100.804 89.3413 100.486 90.3785 100.821 91.3153C100.821 91.3321 101.54 93.5404 100.369 95.6315C99.248 97.6391 96.7553 99.0778 92.9745 99.8808C89.9465 100.533 85.831 100.65 80.7788 100.249C80.7118 100.249 80.6282 100.249 80.5445 100.249C69.7875 100.483 58.9134 99.0778 58.7963 99.0611H58.7796L57.0899 98.8603C57.1903 98.3919 57.2405 97.89 57.2405 97.3881V70.1861C57.2405 69.4667 57.1234 68.7641 56.9226 68.1117C57.2238 66.9908 58.0602 64.4981 60.0343 62.3735C67.5458 56.4178 74.89 36.3258 75.2079 35.4559C75.3417 35.1046 75.3752 34.7198 75.3082 34.335C75.0238 32.4613 75.1242 30.1694 75.5257 29.4835C76.4124 29.5002 78.8047 29.7511 80.2434 31.7419C81.9498 34.1008 81.8829 38.3166 80.0427 43.9042C77.2321 52.4195 76.9979 56.903 79.2229 58.877C80.3271 59.8641 81.7992 59.9143 82.8699 59.5295C83.8904 59.2953 84.8607 59.0945 85.7808 58.944C85.8478 58.9272 85.9314 58.9105 85.9983 58.8938C91.1343 57.7729 100.335 57.087 103.531 59.9979C106.241 62.4739 104.317 65.7528 104.1 66.1041C103.481 67.041 103.665 68.2622 104.501 69.0151C104.518 69.0318 106.274 70.688 106.358 72.913C106.425 74.4019 105.722 75.9243 104.267 77.4299Z'
          fill='#002C6A'
        />
      </svg>
    </div>
  </>
));
