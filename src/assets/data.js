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

export const prizes =  [
  {
    name: "El Gordo",
    prize: 400000,
    times: 1
  },
  {
    name: "Segundo Premio",
    prize: 125000,
    times: 1
  },
  {
    name: "Tercer Premio",
    prize: 50000,
    times: 1
  },
  {
    name: "Cuarto Premio",
    prize: 20000,
    times: 2
  },
  {
    name: "Quinto Premio",
    prize: 6000,
    times: 8
  },
  {
    name: "La Pedrea",
    prize: 1000,
    times: 1794
  },
  {
    name: "Reintegro",
    prize: 20,
    times: 9999
  }
];

export const proximityRule = (prizeNumber, ticketNumber) => {prizeNumber === ticketNumber + 1 || prizeNumber === ticketNumber - 1 }
export const threeFirstDigitsRule = (prizeNumber, ticketNumber) => {prizeNumber === ticketNumber.slice(0, 3)}
export const twoLastDigitsRule = (prizeNumber, ticketNumber) => {prizeNumber === ticketNumber.slice(-2)}

export const proximities = [
  { name: 'Aproximación 1º Premio',
    prize: 2000,
    rule: proximityRule,
  },
  {
    name: 'Aproximación 2º Premio',
    prize: 1000,
    rule: proximityRule,
  },
  {
    name: 'Aproximación 3º Premio',
    prize: 1000,
    rule: proximityRule,
  }
]

export const threeFirstDigitPrizes = [
  {
    name: 'Centenas 1º Premio',
    prize: 100,
    rule: threeFirstDigitsRule,
  },
  {
    name: 'Centenas 2º Premio',
    prize: 100,
    rule: threeFirstDigitsRule,
  },
  {
    name: 'Centenas 3º Premio',
    prize: 100,
    rule: threeFirstDigitsRule,
  },
  {
    name: 'Centenas 4º Premio',
    prize: 100,
    rule: threeFirstDigitsRule,
  }
]

export const lastTwoDigitsPrizes = [
  {
    name: '2 últimas cifras 1º Premio',
    prize: 100,
  },
  {
    name: '2 últimas cifras 2º Premio',
    prize: 100,
  },
  {
    name: '2 últimas cifras 3º Premio',
    prize: 100,
  }
]
