// takes in word bank
// returns 25 unique words at random
export const wordRandomizer = () => {

};

export const words = [
    'tricephalous',
    'manrope"',
    'ichthyolatry',
    'housal',
    'surdomute',
    'ama',
    'soligenous',
    'irradiant',
    'otacoustic',
    'clinomania',
    'cachaemic',
    'technolithic',
    'essive',
    'imbibition',
    'vambrace',
    'grayling',
    'punnet',
    'sapsago',
    'possessive',
    'pseudoblepsis',
    'clowder',
    'hydrology',
    'branchiferous',
    'torchon',
    'herpetophobia'
  ];

export const fieldGenerator = (words, start) => {
  const field = [];
  let redCardCount = 0;
  let redCardCountLimit = 8;
  let blueCardCount = 0;
  let blueCardCountLimit = 8;
  let byStanderCount = 0;
  let assassinCount = 0;

  start ? redCardCountLimit = 9 : blueCardCountLimit = 9;

  for (var i = 0; i < 5; i++) {
    let row = [];

    while (row.length < 5) {
      var number = undefined;
      let card = {};

      if (assassinCount < 1) {
         number = Math.floor(Math.random() * 4);
      } else {
         number = Math.floor(Math.random() * 3);
      }

      if (number === 0 && redCardCount < redCardCountLimit) {
        redCardCount++;
        card.number = number;
        card.word = words.splice(0, 1)[0];
        row.push(card);
        continue;
      } else if (number === 1 && blueCardCount < blueCardCountLimit) {
        blueCardCount++;
        card.number = number;
        card.word = words.splice(0, 1)[0];
        row.push(card);
        continue;
      } else if (number === 2 && byStanderCount < 7) {
        byStanderCount++;
        card.number = number;
        card.word = words.splice(0, 1)[0];
        row.push(card);
        continue;
      } else if (number === 3 && assassinCount < 1) {
        assassinCount++;
        card.number = number;
        card.word = words.splice(0, 1)[0];
        row.push(card);
        continue;
      } else {
        continue;
      }
    }
    field.push(row);
  }
  return field;
};
