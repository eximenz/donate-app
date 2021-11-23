import * as DateUtils from '../core/utils/index';

export class DonateList {
  #usersDonates
  #donatesContainer
  #donatesContainerDonates

  constructor(donates) {
    this.#usersDonates = donates;
    this.#donatesContainer = document.createElement('div');
    this.#donatesContainerDonates = document.createElement('div');
  }

  #getTimerContent(date) {
    return DateUtils.getFormattedTime(date)
  }


  #renderDonateItem(donateDate, donateAmount) {
    const donateItem = document.createElement('div');
    donateItem.className = 'donate-item';
    donateItem.innerHTML = `${this.#getTimerContent(donateDate)} - <b>${donateAmount}</b>`;

    return donateItem;
  }

  updateDonates(updatedDonates) {
    
    if (this.#usersDonates.length > 10) {
      const deleteFirstDonate = document.querySelector('.donate-item');
      deleteFirstDonate.remove();
    }

    const donateItemHTML = this.#renderDonateItem(updatedDonates.date, updatedDonates.amount);
    this.#donatesContainerDonates.append(donateItemHTML);
    this.#donatesContainer.append(this.#donatesContainerDonates);
  }

  render() {
    this.#donatesContainer.classList = 'donates-container';

    const donatesContainerTitle = document.createElement('h2');
    donatesContainerTitle.className = 'donates-container__title';
    donatesContainerTitle.textContent = 'Список донатов';

    this.#usersDonates.forEach((el) => {
      const donateItemHTML = this.#renderDonateItem(el.date, el.amount);
      this.#donatesContainerDonates.append(donateItemHTML);
    });


    this.#donatesContainer.append(donatesContainerTitle, this.#donatesContainerDonates);

    return this.#donatesContainer;
  }
}