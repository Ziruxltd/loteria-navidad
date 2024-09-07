export const lotteries = [
  {
    label: 'Lotería de Navidad',
    value: 'loteria-de-navidad',
    id: 1,
    disabled: false,
    digits: 5,
    min: 0,
    max: 9,
    prizes: [
      { id: 1, name: 'Primer premio', amount: 4000000 },
    ]
  },
  {
    label: 'Euromillones',
    value: 'euromillones',
    id: 2,
    disabled: true
  },
  {
    label: 'Primitiva',
    value: 'primitiva',
    id: 3,
    disabled: true
  },
  {
    label: 'Bonoloto',
    value: 'bonoloto',
    id: 4,
    disabled: true
  }
];
