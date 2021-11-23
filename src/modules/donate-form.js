import { Settings as SETTINGS } from '../core/constants/settings';

export class DonateForm {
  #donateFormCreate
  #totalAmount
  #createNewDonate

  constructor(totalAmount, createNewDonate) {
    this.#donateFormCreate = document.createElement('form');
    this.#totalAmount = totalAmount;
    this.#createNewDonate = createNewDonate;
  }

  updateTotalAmount(newAmount) {
    const h1Text = document.querySelector('#total-amount');
    h1Text.textContent = `${newAmount}${SETTINGS.currency}`;
  }

  render() {
    this.#donateFormCreate.addEventListener('submit', (event) => {
      event.preventDefault();
      const { target } = event;
      const inputName = target.amount;
      let inputValue = inputName.value;

      const newDonateObject = {
        date: new Date(),
        amount: inputValue,
      };

      this.#createNewDonate(newDonateObject);

      inputName.value = null;
    });

    this.#donateFormCreate.className = 'donate-form';

    const mainTitle = document.createElement('h1');
    mainTitle.id = 'total-amount';
    mainTitle.textContent = `${this.#totalAmount}${SETTINGS.currency}`;

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = `Введите сумму в ${SETTINGS.currency}`;

    const input = document.createElement('input');
    input.className = 'donate-form__donate-input';
    input.name = 'amount';
    input.type = 'number';
    input.max = '100';
    input.min = '1';
    input.required = ' ';

    label.append(input);

    const button = document.createElement('button');
    button.className = 'donate-form__submit-button';
    button.type = 'submit';
    button.textContent = 'Задонатить';

    this.#donateFormCreate.append(mainTitle, label, button);

    return this.#donateFormCreate;
  }
}