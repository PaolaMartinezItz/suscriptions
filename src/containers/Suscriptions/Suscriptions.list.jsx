import isoDateFormatter from '../../utils';

const heads = [
  {
    id: 'header-name',
    label: 'Name',
    width: '20%',
  },
  {
    id: 'header-email',
    label: 'Email',
    width: '20%',
  },
  {
    id: 'header-period-type',
    label: 'Period',
    width: '10%',
  },
  {
    id: 'header-last-amount',
    label: 'Last pay',
    width: '10%',
  },
  {
    id: 'header-to-amount',
    label: 'Next pay',
    width: '10%',
  },
  {
    id: 'header-services',
    label: 'Services',
    width: '20%',
  },
];

const createRows = (rows) => rows.map((value) => [
  {
    id: `row-name-${value.id}`,
    value: `${value.firstName} ${value.lastName}`,
    type: 'normal',
    width: '30%',
  },
  {
    id: `row-email-${value.id}`,
    value: value.email,
    type: 'normal',
    width: '20%',
  },
  {
    id: `row-period-type-${value.id}`,
    value: value.periodName,
    type: 'normal',
    width: '10%',
  },
  {
    id: `row-last-amount-${value.id}`,
    value: {
      amount: value.lastAmount,
      date: isoDateFormatter(value.lastDate),
    },
    type: 'pay',
    width: '10%',
  },
  {
    id: `row-to-amount-${value.id}`,
    value: {
      amount: value.nextAmount,
      date: isoDateFormatter(value.nextDate),
    },
    type: 'pay',
    width: '10%',
  },
  {
    id: `row-services-${value.id}`,
    value: JSON.parse(`[${value.services}]`),
    type: 'services',
    width: '20%',
  },
]);

export { heads, createRows };
