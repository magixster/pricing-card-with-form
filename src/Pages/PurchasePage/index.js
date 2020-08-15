import React, { Component } from 'react'
import styles from './PurchasePage.module.scss';

class PurchasePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    console.log(this.props);
    return (<div className={styles.purchasePageStyle}>
      PurchasePage
      </div>)
  }
}

export default PurchasePage;