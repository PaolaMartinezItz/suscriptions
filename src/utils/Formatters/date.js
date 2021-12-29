const leadingZero = (num, digits) => `0${num}`.slice(-digits);

const stringFormat = (dateToFormat, stringTypeToReturn) => {
  let stringToReturn;
  switch (stringTypeToReturn) {
    case 'date':
      stringToReturn = dateToFormat.join('/');
      break;
    case 'time':
      stringToReturn = dateToFormat.join(':');
      break;
    default:
      stringToReturn = dateToFormat.join('-');
      break;
  }
  return stringToReturn;
};

const isoDateFormatter = (dateToFormat) => {
  const date = new Date(dateToFormat);

  const dateFormatted = [
    { value: date.getFullYear(), digits: 4 },
    { value: date.getMonth() + 1, digits: 2 },
    { value: date.getDate(), digits: 2 },
  ].map((num) => leadingZero(num.value, num.digits));

  const dateToReturn = stringFormat(dateFormatted, 'date');

  return dateToReturn;
};

export default isoDateFormatter;
