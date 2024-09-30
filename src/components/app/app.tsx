// App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './app.module.scss';

const App: React.FC = () => (
  <Router>
    <div className={styles.app}>
      <h1>Привет, это магазин кроссовок</h1>
    </div>
  </Router>
);

export default App;
