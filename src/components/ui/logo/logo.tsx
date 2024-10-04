import { FC, memo } from 'react';

export const Logo: FC = memo(() => {
  return (
    <>
      <svg
        width='95'
        height='95'
        viewBox='0 0 95 95'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='47.5' cy='47.5' r='47.5' fill='#19191A' />
        <rect
          x='19.95'
          y='19.95'
          width='55.1'
          height='55.1'
          stroke='#FF1818'
          stroke-width='1.9'
        />
        <path
          d='M30.4909 50.8493C30.6035 50.9297 30.706 51.0081 30.7985 51.0845C30.895 51.1609 31.0035 51.2333 31.1241 51.3016C31.2447 51.3659 31.3693 51.4222 31.498 51.4705C31.7794 51.583 32.095 51.6393 32.4447 51.6393C33.0317 51.6393 33.4357 51.4966 33.6568 51.2112C33.8458 50.9659 33.9402 50.7247 33.9402 50.4875C33.9402 50.2463 33.9161 50.0574 33.8679 49.9207C33.7754 49.6835 33.5905 49.4604 33.3131 49.2513C33.1965 49.1709 33.0578 49.0845 32.897 48.992L31.908 48.5036C31.5382 48.3026 31.2568 48.1076 31.0638 47.9186C30.8708 47.7297 30.7261 47.5548 30.6296 47.394C30.4166 47.0362 30.31 46.5719 30.31 46.001C30.31 45.4301 30.5171 44.9336 30.9311 44.5115C31.3452 44.0894 31.8839 43.8783 32.5473 43.8783C32.9694 43.8783 33.3473 43.9326 33.6809 44.0412C34.0186 44.1497 34.286 44.2804 34.483 44.4331L34.2538 45.2653C33.7754 44.8955 33.2327 44.7105 32.6256 44.7105C32.2437 44.7105 31.9442 44.8372 31.7271 45.0904C31.5141 45.3437 31.4075 45.6693 31.4075 46.0673C31.4075 46.2482 31.4377 46.4131 31.498 46.5618C31.5985 46.8271 31.8075 47.0643 32.1251 47.2734C32.2498 47.3618 32.4226 47.4543 32.6437 47.5508L33.5905 48.0332C33.7593 48.1257 33.9081 48.2181 34.0367 48.3106C34.1694 48.399 34.3001 48.5076 34.4287 48.6362C34.8347 49.0423 35.0378 49.5669 35.0378 50.2101C35.0378 50.8493 34.8187 51.388 34.3805 51.8262C33.9423 52.2644 33.3714 52.4835 32.6679 52.4835C31.896 52.4835 31.2608 52.3469 30.7623 52.0735C30.4929 51.9288 30.2799 51.8021 30.1231 51.6936L30.4909 50.8493ZM35.9664 43.9869H42.4128V44.8251H39.7353V52.375H38.6439V44.8251H35.9664V43.9869ZM48.3888 49.9388H45.0842L44.1797 52.375H43.1666L46.3144 43.9869H47.2189L50.3667 52.375H49.2933L48.3888 49.9388ZM48.0752 49.0945L46.7365 45.4764L45.3917 49.0945H48.0752ZM51.0662 48.1779C51.0662 47.3297 51.2411 46.5819 51.5909 45.9347C51.9366 45.2874 52.4391 44.7829 53.0984 44.4211C53.7577 44.0593 54.5296 43.8783 55.414 43.8783C56.1739 43.8783 56.7266 43.9407 57.0724 44.0653C57.4181 44.1859 57.6714 44.2904 57.8322 44.3789C57.997 44.4633 58.2081 44.5879 58.4654 44.7527L58.0432 45.5548C57.1829 45 56.3146 44.7226 55.4382 44.7226C54.9477 44.7226 54.4974 44.8191 54.0874 45.012C53.3035 45.3779 52.7567 46.001 52.4472 46.8814C52.2984 47.2955 52.224 47.7035 52.224 48.1056C52.224 49.2996 52.5939 50.2403 53.3336 50.9277C53.8241 51.4021 54.4371 51.6393 55.1728 51.6393H55.2452C55.8965 51.6393 56.5578 51.4885 57.2292 51.187V49.2031H55.4382V48.3649L58.3206 48.3588L58.3146 51.6152C57.4583 52.1941 56.4131 52.4835 55.1789 52.4835C53.9447 52.4835 52.9497 52.0876 52.1939 51.2956C51.4421 50.5036 51.0662 49.4644 51.0662 48.1779ZM61.6071 48.4915V51.5308H65.3097V52.375H60.5157V43.9869H65.3097V44.8251H61.6071V47.6473H64.1278V48.4915H61.6071Z'
          fill='white'
        />
        <path
          d='M30.4909 34.699C30.6035 34.7794 30.706 34.8577 30.7985 34.9341C30.895 35.0105 31.0035 35.0829 31.1241 35.1512C31.2447 35.2155 31.3693 35.2718 31.498 35.3201C31.7794 35.4326 32.095 35.4889 32.4447 35.4889C33.0317 35.4889 33.4357 35.3462 33.6568 35.0608C33.8458 34.8155 33.9402 34.5743 33.9402 34.3371C33.9402 34.0959 33.9161 33.907 33.8679 33.7703C33.7754 33.5331 33.5905 33.31 33.3131 33.1009C33.1965 33.0205 33.0578 32.9341 32.897 32.8416L31.908 32.3532C31.5382 32.1522 31.2568 31.9572 31.0638 31.7682C30.8708 31.5793 30.7261 31.4044 30.6296 31.2436C30.4166 30.8858 30.31 30.4215 30.31 29.8506C30.31 29.2797 30.5171 28.7833 30.9311 28.3611C31.3452 27.939 31.8839 27.728 32.5473 27.728C32.9694 27.728 33.3473 27.7822 33.6809 27.8908C34.0186 27.9993 34.286 28.13 34.483 28.2827L34.2538 29.1149C33.7754 28.7451 33.2327 28.5601 32.6256 28.5601C32.2437 28.5601 31.9442 28.6868 31.7271 28.94C31.5141 29.1933 31.4075 29.5189 31.4075 29.9169C31.4075 30.0979 31.4377 30.2627 31.498 30.4114C31.5985 30.6768 31.8075 30.9139 32.1251 31.123C32.2498 31.2114 32.4226 31.3039 32.6437 31.4004L33.5905 31.8828C33.7593 31.9753 33.9081 32.0677 34.0367 32.1602C34.1694 32.2486 34.3001 32.3572 34.4287 32.4858C34.8347 32.8919 35.0378 33.4165 35.0378 34.0597C35.0378 34.699 34.8187 35.2377 34.3805 35.6759C33.9423 36.1141 33.3714 36.3332 32.6679 36.3332C31.896 36.3332 31.2608 36.1965 30.7623 35.9231C30.4929 35.7784 30.2799 35.6517 30.1231 35.5432L30.4909 34.699ZM35.9664 27.8365H42.4128V28.6747H39.7353V36.2246H38.6439V28.6747H35.9664V27.8365ZM48.3888 33.7884H45.0842L44.1797 36.2246H43.1666L46.3144 27.8365H47.2189L50.3667 36.2246H49.2933L48.3888 33.7884ZM48.0752 32.9441L46.7365 29.326L45.3917 32.9441H48.0752ZM51.0662 32.0275C51.0662 31.1793 51.2411 30.4315 51.5909 29.7843C51.9366 29.137 52.4391 28.6325 53.0984 28.2707C53.7577 27.9089 54.5296 27.728 55.414 27.728C56.1739 27.728 56.7266 27.7903 57.0724 27.9149C57.4181 28.0355 57.6714 28.14 57.8322 28.2285C57.997 28.3129 58.2081 28.4375 58.4654 28.6023L58.0432 29.4044C57.1829 28.8496 56.3146 28.5722 55.4382 28.5722C54.9477 28.5722 54.4974 28.6687 54.0874 28.8616C53.3035 29.2275 52.7567 29.8506 52.4472 30.731C52.2984 31.1451 52.224 31.5532 52.224 31.9552C52.224 33.1492 52.5939 34.0899 53.3336 34.7773C53.8241 35.2517 54.4371 35.4889 55.1728 35.4889H55.2452C55.8965 35.4889 56.5578 35.3382 57.2292 35.0366V33.0527H55.4382V32.2145L58.3206 32.2084L58.3146 35.4648C57.4583 36.0437 56.4131 36.3332 55.1789 36.3332C53.9447 36.3332 52.9497 35.9372 52.1939 35.1452C51.4421 34.3532 51.0662 33.314 51.0662 32.0275ZM61.6071 32.3411V35.3804H65.3097V36.2246H60.5157V27.8365H65.3097V28.6747H61.6071V31.4969H64.1278V32.3411H61.6071Z'
          fill='white'
        />
        <path
          d='M30.4909 66.9997C30.6035 67.0801 30.706 67.1585 30.7985 67.2349C30.895 67.3113 31.0035 67.3837 31.1241 67.452C31.2447 67.5163 31.3693 67.5726 31.498 67.6208C31.7794 67.7334 32.095 67.7897 32.4447 67.7897C33.0317 67.7897 33.4357 67.647 33.6568 67.3615C33.8458 67.1163 33.9402 66.8751 33.9402 66.6379C33.9402 66.3967 33.9161 66.2078 33.8679 66.0711C33.7754 65.8339 33.5905 65.6108 33.3131 65.4017C33.1965 65.3213 33.0578 65.2349 32.897 65.1424L31.908 64.654C31.5382 64.4529 31.2568 64.258 31.0638 64.069C30.8708 63.8801 30.7261 63.7052 30.6296 63.5444C30.4166 63.1866 30.31 62.7223 30.31 62.1514C30.31 61.5805 30.5171 61.084 30.9311 60.6619C31.3452 60.2398 31.8839 60.0287 32.5473 60.0287C32.9694 60.0287 33.3473 60.083 33.6809 60.1916C34.0186 60.3001 34.286 60.4308 34.483 60.5835L34.2538 61.4157C33.7754 61.0458 33.2327 60.8609 32.6256 60.8609C32.2437 60.8609 31.9442 60.9875 31.7271 61.2408C31.5141 61.4941 31.4075 61.8197 31.4075 62.2177C31.4075 62.3986 31.4377 62.5635 31.498 62.7122C31.5985 62.9775 31.8075 63.2147 32.1251 63.4238C32.2498 63.5122 32.4226 63.6047 32.6437 63.7012L33.5905 64.1836C33.7593 64.2761 33.9081 64.3685 34.0367 64.461C34.1694 64.5494 34.3001 64.658 34.4287 64.7866C34.8347 65.1927 35.0378 65.7173 35.0378 66.3605C35.0378 66.9997 34.8187 67.5384 34.3805 67.9766C33.9423 68.4148 33.3714 68.6339 32.6679 68.6339C31.896 68.6339 31.2608 68.4972 30.7623 68.2239C30.4929 68.0792 30.2799 67.9525 30.1231 67.844L30.4909 66.9997ZM35.9664 60.1373H42.4128V60.9755H39.7353V68.5254H38.6439V60.9755H35.9664V60.1373ZM48.3888 66.0892H45.0842L44.1797 68.5254H43.1666L46.3144 60.1373H47.2189L50.3667 68.5254H49.2933L48.3888 66.0892ZM48.0752 65.2449L46.7365 61.6268L45.3917 65.2449H48.0752ZM51.0662 64.3283C51.0662 63.4801 51.2411 62.7323 51.5909 62.0851C51.9366 61.4378 52.4391 60.9333 53.0984 60.5715C53.7577 60.2096 54.5296 60.0287 55.414 60.0287C56.1739 60.0287 56.7266 60.091 57.0724 60.2157C57.4181 60.3363 57.6714 60.4408 57.8322 60.5292C57.997 60.6137 58.2081 60.7383 58.4654 60.9031L58.0432 61.7052C57.1829 61.1504 56.3146 60.873 55.4382 60.873C54.9477 60.873 54.4974 60.9695 54.0874 61.1624C53.3035 61.5283 52.7567 62.1514 52.4472 63.0318C52.2984 63.4459 52.224 63.8539 52.224 64.256C52.224 65.45 52.5939 66.3907 53.3336 67.0781C53.8241 67.5525 54.4371 67.7897 55.1728 67.7897H55.2452C55.8965 67.7897 56.5578 67.6389 57.2292 67.3374V65.3535H55.4382V64.5153L58.3206 64.5092L58.3146 67.7656C57.4583 68.3445 56.4131 68.6339 55.1789 68.6339C53.9447 68.6339 52.9497 68.2379 52.1939 67.446C51.4421 66.654 51.0662 65.6148 51.0662 64.3283ZM61.6071 64.6419V67.6812H65.3097V68.5254H60.5157V60.1373H65.3097V60.9755H61.6071V63.7977H64.1278V64.6419H61.6071Z'
          fill='white'
        />
      </svg>
    </>
  );
});
