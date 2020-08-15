import React from 'react';
import styles from './PurchaseItems.module.scss';
import SelectedPlanCards from './SelectedPlanCards';

const PurchaseItems = ({ data, showPurchaseModal, changeDefaultSelected, defaultSelected }) => {
  const availablePlanCategories = Object.keys(data);

  const showAvailablePlanTypes = availablePlanCategories.map((availablePlan) => {
    const isCurrentSelected = availablePlan === defaultSelected;
    return (<span
      className={isCurrentSelected ? `${styles.activePlanStyle} ${styles.availablePlanStyle}` : styles.availablePlanStyle}
      onClick={() => changeDefaultSelected(availablePlan)}
      >
      {availablePlan}
    </span>);
  });

  return (<div className={styles.PurchaseItemsContainer}>
    <div className={styles.PurchaseItems}>
      {showAvailablePlanTypes}
    </div>
      <SelectedPlanCards showPurchaseModal={showPurchaseModal} selectedPlanData={data[defaultSelected]} />
  </div>);
}

  export default PurchaseItems;