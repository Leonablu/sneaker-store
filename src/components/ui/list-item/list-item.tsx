import { FC, memo, useMemo, useState } from 'react';
import styles from './list-item.module.scss';
import { Pagination, SelectChangeEvent, Stack } from '@mui/material';
import { CardProduct } from '../../ui-kit/card';
import Grid from '@mui/material/Grid2';

import { CountButton, Sorting } from '../../ui-kit';
import { useSelector } from '../../../services/store';
import { getListProduct } from '../../../services/slices/products/products';
import { formatNumber } from '../../../utils/utils';

type TListCard = {
  activeCategory: 'sneaker' | 'nabory' | 'igrushki';
};

export const ListItem: FC<TListCard> = memo(({ activeCategory }) => {
  const products = useSelector(getListProduct);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(18);
  const [sorting, setSorting] = useState('default');

  const handlePageChange = (event: any, page: number) => {
    setCurrentPage(page);
  };
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Сбросить текущую страницу, когда меняется itemsPerPage
  };

  const handleSortingChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value);
  };

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return products.filter(
      (product) => product.category.slug === activeCategory
    );
  }, [products, activeCategory]);

  const sortedProducts = useMemo(() => {
    if (!filteredProducts) return [];

    let sorted = [...filteredProducts];

    switch (sorting) {
      case 'high price':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'low price':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'create date':
        sorted.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
        break;
      default:
        break;
    }

    return sorted;
  }, [filteredProducts, sorting]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Grid gridColumn={2} rowGap='35px' display='grid'>
        <Grid display='flex' justifyContent='space-between'>
          <Sorting onChange={handleSortingChange} sorting={sorting} />
          <CountButton
            itemsPerPage={itemsPerPage}
            onChange={handleItemsPerPageChange}
          />
        </Grid>
        <Grid container className={styles.container_items}>
          {currentItems?.map((product) => (
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
            count={Math.ceil((products?.length ?? 0) / itemsPerPage)}
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
});
