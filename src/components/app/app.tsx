import { StyledEngineProvider } from '@mui/material';
import styles from './app.module.scss';
import { AppFooter, AppHeader, Modal, Order } from '..';
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
  ProfilePage,
  RegisterPage,
  NotFound404,
  ProfileOrdersPage
} from '../../pages';
import { ProtectedRoute } from '../protected-route';
import { Layout } from '../layout';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
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
                <ProtectedRoute type='auth'>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile/orders'
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
