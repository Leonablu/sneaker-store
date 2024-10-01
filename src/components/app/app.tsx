import { StyledEngineProvider } from '@mui/material';
import styles from './app.module.scss';

const App: React.FC = () => (
  // чтобы стили в проекте были выше стилей из библиотеки
  <StyledEngineProvider injectFirst>  
  <div className={styles.app}>
    <h1>Привет, это магазин кроссовок</h1>
  </div>
 </StyledEngineProvider> 
);

export default App;
