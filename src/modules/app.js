import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import * as DateUtils from '../core/utils/index';


const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];


export default class App {
  #donateForm
  #donateList
  #state

  constructor() {
    this.#state = {
      donates: mockDonates,
      totalAmount: this.#createTotalAmountyFromMockDonates(),
    };
    this.#donateForm = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this));
    this.#donateList = new DonateList(this.#state.donates);
  }

  #createTotalAmountyFromMockDonates() {
      const newArrayFromMockDonatesAmount = [];

      mockDonates.forEach((donat) => {
        newArrayFromMockDonatesAmount.push(donat.amount);
      });
  
      const totalAmountyFromMockDonates = DateUtils.calculateSumOfNumbers(newArrayFromMockDonatesAmount);
  
      return totalAmountyFromMockDonates;
  }


  createNewDonate(newDonate) {
    this.#state.donates.push(newDonate);
    this.#state.totalAmount += Number(newDonate.amount);
    this.#donateList.updateDonates(newDonate);
    this.#donateForm.updateTotalAmount(this.#state.totalAmount);
  }

  run() {
    const donateFormHTML = this.#donateForm.render();
    const donateListHTML = this.#donateList.render();
    document.body.append(donateFormHTML, donateListHTML);
  }
}


