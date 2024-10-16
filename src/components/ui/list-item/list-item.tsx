import { FC, memo, useState } from 'react';
import styles from './list-item.module.scss';
import { IconButton, Pagination, Stack } from '@mui/material';
import { CardProduct } from '../../ui-kit/card';
import Grid from '@mui/material/Grid2';
import { TProduct } from '../../../types';
import { Sorting } from '../../ui-kit';

type TListCard = {
  products: Partial<TProduct>[];
  activeCategory: 1 | 2 | 3;
  onSort: () => void;
};

export const ListItem: FC<TListCard> = memo(
  ({ products, onSort, activeCategory }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(18);
    const handlePageChange = (event: any, page: number) => {
      setCurrentPage(page);
    };
    const handleItemsPerPageChange = (newItemsPerPage: number) => {
      setItemsPerPage(newItemsPerPage);
      setCurrentPage(1); // Сбросить текущую страницу, когда меняется itemsPerPage
    };

    const filteredProducts = products.filter(
      (product) => product.categoryId === activeCategory
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    return (
      <>
        <Grid gridColumn={2} rowGap='35px' display='grid'>
          <Grid display='flex' justifyContent='space-between'>
            <Sorting />
            <Grid className={styles.container}>
              <p> Количество </p>
              <IconButton
                value={itemsPerPage}
                aria-label='left aligned'
                className={`${styles.container_button} ${itemsPerPage === 18 ? styles.container_button_active : ''}`}
                onClick={() => handleItemsPerPageChange(18)}
              >
                18
              </IconButton>
              <IconButton
                value={itemsPerPage}
                aria-label='centered'
                className={`${styles.container_button} ${itemsPerPage === 30 ? styles.container_button_active : ''}`}
                onClick={() => handleItemsPerPageChange(30)}
              >
                30
              </IconButton>
              <IconButton
                value={itemsPerPage}
                aria-label='right aligned'
                className={`${styles.container_button} ${itemsPerPage === 60 ? styles.container_button_active : ''}`}
                onClick={() => handleItemsPerPageChange(60)}
              >
                60
              </IconButton>
            </Grid>
          </Grid>

          <Grid container className={styles.container_items}>
            {currentItems.map((product) => (
              <Grid key={product.id}>
                <CardProduct
                  name={product.name}
                  images={product.images}
                  price={product.price}
                  slug={product.slug}
                  tags={product.tags}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid display='grid' gridColumn='span 2' gridRow={2}>
          <Stack className={styles.stack}>
            <Pagination
              className={styles.pagination}
              count={Math.ceil(products.length / itemsPerPage)}
              onChange={handlePageChange}
              defaultPage={1}
              page={currentPage}
              boundaryCount={1}
              sx={{
                '& .MuiPaginationItem-root': {
                  fontSize: '24px',
                  fontFamily: 'Montserrat, sans-serif'
                },
                '& .MuiPaginationItem-page': { color: '#B3C0D2' },
                '& .MuiPaginationItem-root.Mui-selected': { color: '#29292D' },
                '& .MuiPagination-ul': { gap: '35px' },
                '& .MuiPaginationItem-icon': {
                  fontSize: '40px'
                }
              }}
            />
          </Stack>
        </Grid>
      </>
    );
  }
);
