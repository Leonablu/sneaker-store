import { StyledEngineProvider } from '@mui/material';
import styles from './app.module.scss';
import { Layout, Modal, Order } from '..';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  BasketPage,
  BlogItemPage,
  BlogPage,
  CatalogAccessoriesPage,
  CatalogClothesPage,
  CatalogShoesPage,
  FAQPage,
  LoginPage,
  MainPage,
  ProductPage,
  RegisterPage,
  NotFound404,
  ProfileOrdersPage,
  ProfilePage
} from '../../pages';
// import { ProtectedRoute } from '../protected-route';
import { useDispatch } from '../../services/store';
import { useEffect } from 'react';
import { getProductsItem } from '../../services/slices/products/action';
import { getUser } from '../../services/slices/user/action';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getProductsItem());
  }, [dispatch]);

  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.app}>
        <Layout>
          <Routes location={background || location}>
            <Route path='/' element={<MainPage />} />
            <Route path='/shoes' element={<CatalogShoesPage />} />
            <Route path='/clothes' element={<CatalogClothesPage />} />
            <Route path='/accessories' element={<CatalogAccessoriesPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/basket' element={<BasketPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/FAQ' element={<FAQPage />} />
            <Route
              path='/profile'
              element={
                //                 <ProtectedRoute type='auth'>
                <ProfilePage />
                // </ProtectedRoute>
              }
            />
            <Route
              path='/orders'
              element={
                // <ProtectedRoute type='auth'>
                <ProfileOrdersPage />
                // </ProtectedRoute>
              }
            />
            <Route path='/registration' element={<RegisterPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/blog/post/:id' element={<BlogItemPage />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
          {background && (
            <Routes>
              <Route
                path='/product/:id'
                element={
                  <Modal onClose={() => navigate(-1)}>
                    <Order />{' '}
                  </Modal>
                }
              />
            </Routes>
          )}
        </Layout>
      </div>
    </StyledEngineProvider>
  );
};

export default App;
