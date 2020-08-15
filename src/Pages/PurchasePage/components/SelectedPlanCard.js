import React from 'react';
import styles from './SelectedPlanCard.module.scss';

const SelectedPlanCard = ({ planCard, showPurchaseModal }) => {
  const isMostPopular = planCard.most_popular;
  return (<div className={styles.card}>
      {isMostPopular ?
          <div className={styles.card__mostPopular}> Most Popular! </div> :
          <div className={styles.mostPopularDummyArea}> </div>}
      <div className={styles.card__quantified}>{planCard['Plan name']}</div>
      <div className={styles.card__perlead}>
        <span className={styles.card__perlead_price}>{planCard['Price per live transfer']}</span>
        <span className={styles.card__perlead_label}>Per Qualified lead</span>
      </div>
      <div className={styles.card__leads}>
        <span className={styles.card__leads_label}>Qualified Leads per month</span>
        <span className={styles.card__leads_number}>{planCard['Qualified Leads Per Month']}</span>
      </div>
      <div className={styles.card__leads}>
        <span className={styles.card__leads_label}>Platform Fee Per Month</span>
        <span className={styles.card__totalPerMonth}>{planCard['Total platform price']}</span>
      </div>
      <div className={styles.card__finalPrice}>
        <span>{planCard['Final package price']}/mo</span>
      </div>
      <button className={styles.card__startTrialBtn} onClick={() => showPurchaseModal(planCard['Plan name'])}>Start Your Trial</button>
    </div>);
}

export default SelectedPlanCard;