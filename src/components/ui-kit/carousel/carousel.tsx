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
  const [indexes, setIndexes] = useState({
    firstIndex: 0,
    lastIndex: visibleCount
  });
  const [visibleImages, setVisibleImages] = useState(
    cards.slice(0, visibleCount)
  );

  const handleNext = () => {
    const newLastIndex =
      indexes.lastIndex + 1 > cards.length - 1 ? 0 : indexes.lastIndex + 1;
    const newFirstIndex =
      indexes.firstIndex + 1 > cards.length - 1 ? 0 : indexes.firstIndex + 1;

    visibleImages.shift();

    const newVisibleImages = [...visibleImages, cards[newLastIndex]];

    setVisibleImages(newVisibleImages);
    setIndexes({ firstIndex: newFirstIndex, lastIndex: newLastIndex });
  };

  const handlePrev = () => {
    const newLastIndex =
      indexes.lastIndex - 1 < 0 ? cards.length - 1 : indexes.lastIndex - 1;
    const newFirstIndex =
      indexes.firstIndex - 1 < 0 ? cards.length - 1 : indexes.firstIndex - 1;

    visibleImages.pop();

    const newVisibleImages = [cards[newFirstIndex], ...visibleImages];

    setVisibleImages(newVisibleImages);
    setIndexes({ firstIndex: newFirstIndex, lastIndex: newLastIndex });
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handlePrev} aria-label='navigate left'>
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
        <IconButton onClick={handleNext} aria-label='navigate right'>
          <img src={arrowRight} alt='arrow right' />
        </IconButton>
      </Box>
    </>
  );
};
