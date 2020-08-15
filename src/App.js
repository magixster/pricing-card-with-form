import React from 'react';
import PurchasePage from './Pages/PurchasePage';
import { PURCHASE_API_DATA } from './mock-data/PurchaceApiData';
import styles from './App.module.scss';

const data = PURCHASE_API_DATA;

function App() {
  return (
    <div className={styles.App}>
      <PurchasePage data={data} />
    </div>
  );
}

export default App;
