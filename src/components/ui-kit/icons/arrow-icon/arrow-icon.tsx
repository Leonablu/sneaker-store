import { FC, memo } from 'react';

export const ArrowIcon: FC = memo(() => (
  <>
    <svg
      width='96'
      height='96'
      viewBox='0 0 96 96'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_26_133)'>
        <circle cx='48' cy='33.0001' r='25' fill='#FF1818' />
      </g>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M47.9998 19.6667L45.6665 22.0001L54.9998 31.3334H34.6665V34.6667H54.9998L45.6665 44.0001L47.9998 46.3334L61.3332 33.0001L47.9998 19.6667Z'
        fill='white'
      />
      <defs>
        <filter
          id='filter0_d_26_133'
          x='0'
          y='6.10352e-05'
          width='96'
          height='96'
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
          <feGaussianBlur stdDeviation='11.5' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 0.0958334 0 0 0 0 0.0958334 0 0 0 0.15 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_26_133'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_26_133'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  </>
));

