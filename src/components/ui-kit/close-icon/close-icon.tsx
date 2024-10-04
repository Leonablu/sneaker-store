import { FC, memo } from 'react';

export const CloseIcon: FC = memo(() => (
  <>
    <svg
      width='90'
      height='90'
      viewBox='0 0 90 90'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_0_1)'>
        <circle cx='45' cy='30' r='25' fill='#29292D' />
      </g>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M52.9545 23.6358L51.3636 22.0449L45 28.4086L38.6363 22.0449L37.0454 23.6358L43.409 29.9995L37.0454 36.3631L38.6363 37.954L45 31.5904L51.3636 37.954L52.9545 36.3631L46.5909 29.9995L52.9545 23.6358Z'
        fill='white'
      />
      <defs>
        <filter
          id='filter0_d_0_1'
          x='0'
          y='0'
          width='90'
          height='90'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='15' />
          <feGaussianBlur stdDeviation='10' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.160417 0 0 0 0 0.161875 0 0 0 0 0.175 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_0_1'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_0_1'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  </>
));
