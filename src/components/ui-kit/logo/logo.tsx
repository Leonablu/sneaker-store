import { FC, memo } from 'react';
import styles from './logo.module.scss';

type LogoProps = {
  widthLogo: string;
  heightLogo: string;
};

export const Logo: FC<LogoProps> = memo(({ widthLogo, heightLogo }) => (
  <>
    <div className={styles.logo_container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={widthLogo}
        height={heightLogo}
        viewBox='0 0 95 95'
        fill='none'
      >
        <circle cx='47.5' cy='47.5' r='47.5' fill='#19191A' />
        <path
          stroke='#FF1818'
          strokeWidth='1.9'
          d='M19.95 19.95h55.1v55.1h-55.1z'
        />
        <path
          fill='#fff'
          d='M30.49 50.85c.113.08.216.158.308.234.097.077.205.15.326.218.12.064.245.12.374.169.281.112.597.168.947.168.587 0 .99-.142 1.212-.428.189-.245.283-.486.283-.724 0-.24-.024-.43-.072-.566-.093-.237-.278-.46-.555-.67a6.039 6.039 0 0 0-.416-.259l-.989-.488c-.37-.201-.651-.396-.844-.585a2.726 2.726 0 0 1-.434-.525c-.213-.358-.32-.822-.32-1.393 0-.57.207-1.067.621-1.49.414-.422.953-.633 1.616-.633.422 0 .8.055 1.134.163.338.109.605.24.802.392l-.23.832a2.593 2.593 0 0 0-1.627-.554c-.382 0-.682.126-.899.38-.213.253-.32.578-.32.976 0 .181.03.346.09.495.101.265.31.502.628.711.125.089.298.181.519.278l.946.482c.17.093.318.185.447.278.132.088.263.197.392.325.406.406.609.93.609 1.574 0 .64-.22 1.178-.658 1.616-.438.438-1.009.657-1.712.657-.772 0-1.407-.136-1.906-.41a6.903 6.903 0 0 1-.639-.38l.368-.844Zm5.476-6.863h6.447v.838h-2.678v7.55h-1.091v-7.55h-2.678v-.838Zm12.423 5.952h-3.305l-.904 2.436h-1.014l3.148-8.388h.905l3.148 8.388h-1.074l-.904-2.436Zm-.314-.845-1.339-3.618-1.344 3.618h2.683Zm2.991-.916c0-.848.175-1.596.525-2.243a3.67 3.67 0 0 1 1.507-1.514c.66-.362 1.431-.543 2.316-.543.76 0 1.313.063 1.658.187.346.12.6.225.76.314.165.084.376.209.633.374l-.422.802c-.86-.555-1.728-.832-2.605-.832-.49 0-.94.096-1.35.289-.785.366-1.331.989-1.64 1.87a3.604 3.604 0 0 0-.224 1.224c0 1.194.37 2.134 1.11 2.822.49.474 1.103.711 1.839.711h.072c.651 0 1.313-.15 1.984-.452v-1.984h-1.79v-.838l2.882-.006-.006 3.256c-.857.58-1.902.868-3.136.868-1.234 0-2.23-.395-2.985-1.187-.752-.792-1.128-1.832-1.128-3.118Zm10.541.314v3.039h3.703v.844h-4.794v-8.388h4.794v.838h-3.703v2.822h2.52v.845h-2.52ZM30.49 34.7c.113.08.216.158.308.234.097.077.205.15.326.218.12.064.245.12.374.168.281.113.597.17.947.17.587 0 .99-.143 1.212-.429.189-.245.283-.486.283-.724 0-.24-.024-.43-.072-.566-.093-.238-.278-.46-.555-.67a6.039 6.039 0 0 0-.416-.259l-.989-.489c-.37-.2-.651-.395-.844-.584a2.726 2.726 0 0 1-.434-.525c-.213-.358-.32-.822-.32-1.393 0-.57.207-1.067.621-1.49.414-.422.953-.633 1.616-.633.422 0 .8.055 1.134.163.338.109.605.24.802.392l-.23.832a2.592 2.592 0 0 0-1.627-.554c-.382 0-.682.126-.899.38-.213.253-.32.578-.32.976 0 .181.03.346.09.495.101.265.31.502.628.711.125.089.298.181.519.278l.946.482c.17.093.318.185.447.278.132.088.263.197.392.325.406.406.609.93.609 1.574 0 .64-.22 1.178-.658 1.616-.438.438-1.009.657-1.712.657-.772 0-1.407-.136-1.906-.41a6.925 6.925 0 0 1-.639-.38l.368-.844Zm5.476-6.863h6.447v.838h-2.678v7.55h-1.091v-7.55h-2.678v-.838Zm12.423 5.952h-3.305l-.904 2.436h-1.014l3.148-8.388h.905l3.148 8.388h-1.074l-.904-2.436Zm-.314-.845-1.339-3.618-1.344 3.618h2.683Zm2.991-.916c0-.848.175-1.596.525-2.243a3.671 3.671 0 0 1 1.507-1.514c.66-.362 1.431-.543 2.316-.543.76 0 1.313.063 1.658.187.346.12.6.225.76.314.165.084.376.209.633.374l-.422.802c-.86-.555-1.728-.832-2.605-.832-.49 0-.94.096-1.35.289-.785.366-1.331.989-1.64 1.87a3.603 3.603 0 0 0-.224 1.224c0 1.194.37 2.134 1.11 2.822.49.474 1.103.711 1.839.711h.072c.651 0 1.313-.15 1.984-.452v-1.984h-1.79v-.838l2.882-.006-.006 3.256c-.857.58-1.902.868-3.136.868-1.234 0-2.23-.395-2.985-1.187-.752-.792-1.128-1.832-1.128-3.118Zm10.541.314v3.039h3.703v.844h-4.794v-8.388h4.794v.838h-3.703v2.822h2.52v.845h-2.52ZM30.49 67c.113.08.216.158.308.234.097.077.205.15.326.218.12.064.245.12.374.169.281.112.597.168.947.168.587 0 .99-.142 1.212-.428.189-.245.283-.486.283-.724 0-.24-.024-.43-.072-.566-.093-.237-.278-.46-.555-.67a6.039 6.039 0 0 0-.416-.259l-.989-.488c-.37-.201-.651-.396-.844-.585a2.73 2.73 0 0 1-.434-.525c-.213-.358-.32-.822-.32-1.393 0-.57.207-1.067.621-1.49.414-.422.953-.633 1.616-.633.422 0 .8.055 1.134.163.338.109.605.24.802.392l-.23.832a2.593 2.593 0 0 0-1.627-.554c-.382 0-.682.126-.899.38-.213.253-.32.578-.32.976 0 .181.03.346.09.495.101.265.31.502.628.711.125.089.298.181.519.278l.946.482c.17.093.318.185.447.278.132.088.263.197.392.325.406.406.609.93.609 1.574 0 .64-.22 1.178-.658 1.616-.438.439-1.009.658-1.712.658-.772 0-1.407-.137-1.906-.41a6.903 6.903 0 0 1-.639-.38l.368-.845Zm5.476-6.863h6.447v.838h-2.678v7.55h-1.091v-7.55h-2.678v-.838Zm12.423 5.952h-3.305l-.904 2.436h-1.014l3.148-8.388h.905l3.148 8.388h-1.074l-.904-2.436Zm-.314-.844-1.339-3.619-1.344 3.619h2.683Zm2.991-.917c0-.848.175-1.596.525-2.243a3.67 3.67 0 0 1 1.507-1.514c.66-.362 1.431-.543 2.316-.543.76 0 1.313.063 1.658.187.346.12.6.225.76.314.165.084.376.209.633.374l-.422.802c-.86-.555-1.728-.832-2.605-.832-.49 0-.94.096-1.35.29-.785.365-1.331.988-1.64 1.868a3.604 3.604 0 0 0-.224 1.225c0 1.194.37 2.134 1.11 2.822.49.474 1.103.711 1.839.711h.072c.651 0 1.313-.15 1.984-.452v-1.984h-1.79v-.838l2.882-.006-.006 3.256c-.857.58-1.902.869-3.136.869-1.234 0-2.23-.396-2.985-1.188-.752-.792-1.128-1.832-1.128-3.118Zm10.541.313v3.04h3.703v.844h-4.794v-8.388h4.794v.838h-3.703v2.822h2.52v.844h-2.52Z'
        />
      </svg>
    </div>
  </>
));
