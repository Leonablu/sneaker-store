import { FC, useRef, useState } from 'react';
import styles from './carousel.module.scss';
import Grid from '@mui/material/Grid2';

import { Box, IconButton } from '@mui/material';
import arrowLeft from '../../../assets/svg/arrow-left.svg';
import arrowRight from '../../../assets/svg/arrow-right.svg';

interface cardInfo {
  src: string;
  alt: string;
}

export const Carousel = ({
  cards,
  visibleCount
}: {
  cards: cardInfo[];
  visibleCount: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(
    cards.slice(0, visibleCount)
  );

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % cards.length;
    const newVisibleImages = [...visibleImages.slice(1), cards[nextIndex]];
    setVisibleImages(newVisibleImages);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
    const newVisibleImages = [
      cards[prevIndex],
      ...visibleImages.slice(0, visibleCount - 1)
    ];
    setVisibleImages(newVisibleImages);
    setCurrentIndex(prevIndex);
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleNext} aria-label='navigate left'>
          <img src={arrowLeft} alt='arrow left' />
        </IconButton>
        <Grid container className={styles.container}>
          {visibleImages.map((image, index) => (
            <Grid key={index}>
              <img
                src={image.src}
                alt={`Image ${index}`}
                className={styles.brand}
              />
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handlePrev} aria-label='navigate right'>
          <img src={arrowRight} alt='arrow right' />
        </IconButton>
      </Box>
    </>
  );
};
