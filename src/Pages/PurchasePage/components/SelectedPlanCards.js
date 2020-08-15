import React from 'react';
import SelectedPlanCard from './SelectedPlanCard';
import styles from './SelectedPlanCards.module.scss';

const SelectedPlanCards = ({ selectedPlanData, showPurchaseModal }) => {
  return (<div className={styles.selectedPlanCardsContainer}>{
    selectedPlanData.map((planCard) => <SelectedPlanCard planCard={planCard} showPurchaseModal={showPurchaseModal} />)
  }</div>)
}

export default SelectedPlanCards;