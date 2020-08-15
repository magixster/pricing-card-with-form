import React, { Component } from 'react'
import PurchaseItems from './components/PurchaseItems';
import Modal from '../../shared-components/Modal';
import styles from './PurchasePage.module.scss';

class PurchasePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelected: '$300K-$400K',
      showModal: false,
      selectedPlan: null,
      userForm: {
        name: '',
        email_address: '',
        phone_number: '',
        leads_in_month: '',
        total_leads: '',
        crm_used: '',
        agents_number: '',
      }
    };
  }

  handleChangeDefaultSelected = (newlySelected) => {
    this.setState((prevState) => ({
      ...prevState,
      defaultSelected: newlySelected,
    }))
  }

  togglePurchaseModal = (selectedPlan) => {
    this.setState((prevState) => ({
      ...prevState,
      showModal: !prevState.showModal,
      selectedPlan,
    }))
  }

  submitForm = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state.userForm));
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        userForm: {
          ...prevState.userForm,
          [name]: value
        }
      }
    })
  }

  render() {
    const { data } = this.props;
    const { defaultSelected, showModal, selectedPlan, userForm } = this.state;

    return (<React.Fragment>
      <PurchaseItems
        data={data}
        defaultSelected={defaultSelected}
        changeDefaultSelected={this.handleChangeDefaultSelected}
        showPurchaseModal={this.togglePurchaseModal}
      />
      {showModal && <Modal toggleModal={this.togglePurchaseModal}>
            <div className={styles.myModal}>
            <button
            className={styles.modalClose}
            onClick={this.togglePurchaseModal}
            >X</button>
            <div className={styles.form}>
              <header className={styles.form__header}> Get Started with SquadVoice</header>
              <div className={styles.form__container}>
                <span className={styles.form__selected}>Plan Selected:</span>
                <span className={styles.form__selectedPlan}>&nbsp;{selectedPlan}</span>
              </div>
              <div className={styles.userForm}>
                <form onSubmit={this.submitForm}>
                <div className={styles.userInputItem}>
                  <label labelFor={'name'}>Name</label>
                  <input name={'name'} type={'text'} onChange={this.handleFormChange} value={userForm.name} />
                </div>
                <div className={styles.userInputItem}>
                  <label labelFor={'Email Address'}>Email Address</label>
                  <input type={'email'} name={'email_address'} onChange={this.handleFormChange} value={userForm.email_address} label={'Email Address'} halfWidth />
                </div>
                <div className={styles.userInputItem}>
                  <label labelFor={'Phone No'}>Phone No</label>
                  <input type={'number'} name={'phone_number'} onChange={this.handleFormChange} value={userForm.phone_number} label={'Phone No'} halfWidth />
                </div>
                <div className={styles.userInputItem}>
                  <label labelFor={'Number of leads you generate in a month'}>Number of leads you generate in a month</label>
                  <select name={'leads_in_month'} onChange={this.handleFormChange} value={userForm.leads_in_month} label={''} type={'select'} halfWidth />
                </div>
                <div className={styles.userInputItem}>
                  <label labelFor={'Total leads in your CRM'}>'Total leads in your CRM</label>
                  <select name={'total_leads'} onChange={this.handleFormChange} value={userForm.total_leads} label={'Total leads in your CRM'} type={'select'} halfWidth />
                </div>
                <div className={styles.userInputItem}>
                  <label labelFor={'Which CRM do you use?'}>Which CRM do you use?</label>
                  <select name={'crm_used'} onChange={this.handleFormChange} value={userForm.crm_used} label={'Which CRM do you use?'} type={'select'} halfWidth />
                </div>
                <div className={styles.userInputItem}>
                  <label labelFor={'No. of Agents'}>No. of Agents</label>
                  <select name={'agents_number'} onChange={this.handleFormChange} value={userForm.agents_number} label={'No. of Agents'} type={'select'} halfWidth />
                </div>
                <button className={styles.submitBtn} type={'submit'} value={'Submit'}> Submit </button>
                </form>
              </div>
            </div>
          </div>
        </Modal>}
      </React.Fragment>)
  }
}

export default PurchasePage;