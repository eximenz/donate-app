import moment from 'moment';

export const calculateSumOfNumbers = numbers => {
  const sumOfArrEl = numbers.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return sumOfArrEl;
}

export const getFormattedTime = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}