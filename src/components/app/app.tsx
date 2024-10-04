import { StyledEngineProvider } from '@mui/material';
import styles from './app.module.scss';
import { AppFooter, AppHeader, Modal } from '..';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  BasketPage,
  BlogItemPage,
  BlogPage,
  CatalogAccessoriesPage,
  CatalogClothesPage,
  CatalogShoesPage,
  LoginPage,
  MainPage,
  ProductPage,
  ProfilePage,
  RegisterPage
} from '../../pages';
import { ProtectedRoute } from '../protected-route';
import { NotFound404 } from '../ui/pages/not-found-404';

const App = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const background = location.state?.background;
  // чтобы стили в проекте были выше стилей из библиотеки
  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.app}>
        <h1>Привет, это магазин кроссовок</h1>
        <AppHeader />
        <Routes location={background || location}>
          <Route path='/' element={<MainPage />} />
          <Route path='/shoes' element={<CatalogShoesPage />} />
          <Route path='/clothes' element={<CatalogClothesPage />} />
          <Route path='/accessories' element={<CatalogAccessoriesPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/basket' element={<BasketPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/profile'
            element={
              <ProtectedRoute type='auth'>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path='/registration' element={<RegisterPage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/blog/post/:id' element={<BlogItemPage />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
        {background && (
          <Routes>
            <Route path='/product/:id/quick-purchase' element={<Modal />} />
          </Routes>
        )}
        <AppFooter />
      </div>
    </StyledEngineProvider>
  );
};

export default App;
