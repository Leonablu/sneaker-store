import { FC, memo, useState } from 'react';
import styles from './card.module.scss';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TProduct } from '../../../types';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export type CardActions = {
  onLikeClick: () => void;
};

export const CardProduct: FC<Partial<TProduct & CardActions>> = memo(
  (props) => {
    const { images, name, slug, price, tags, onLikeClick } = props;

    const [selected, setSelected] = useState<number | null>(null);
    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: number | null
    ) => {
      setSelected(newAlignment);
    };

    return (
      <div className={styles.container_card}>
        <Card className={styles.card}>
          <CardMedia
            component='img'
            className={styles.card_image}
            src={images}
            alt={name}
          />
          <Grid container className={styles.card_container}>
            <CardContent sx={{ padding: 0 }}>
              <Typography
                className={styles.card_title}
                color='text.secondary'
                component='p'
              >
                {name}
              </Typography>
              <Typography component='p' className={styles.card_article}>
                {slug}
              </Typography>
            </CardContent>
            <Grid container justifyContent='space-between' alignItems='center'>
              <CardContent sx={{ padding: 0 }}>
                <Typography component='p' className={styles.card_price}>
                  {price} ₽
                </Typography>
              </CardContent>

              <IconButton
                aria-label='add to favorites'
                sx={{ padding: 0 }}
                onClick={onLikeClick}
              >
                <FavoriteIcon />
              </IconButton>
            </Grid>
          </Grid>
          <ToggleButtonGroup
            className={styles.card_size}
            value={selected}
            exclusive
            onChange={handleChange}
          >
            {tags?.map((item, index) => (
              <ToggleButton
                value={index}
                key={index}
                className={styles.card_size_icon}
                style={{
                  backgroundColor:
                    selected === index
                      ? ' rgba(0, 44, 106, 1)'
                      : 'rgba(252, 252, 252, 1)',
                  color:
                    selected === index
                      ? 'rgba(252, 252, 252, 1)'
                      : ' rgba(0, 44, 106, 1)'
                }}
              >
                {`${item} EUR `}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Card>
      </div>
    );
  }
);
