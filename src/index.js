function toReadable (number) {
  const strings = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const decs = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const numInString = number.toString();

  if (numInString == 0) {
    return 'zero';
  }

  if (numInString.length === 1) {
    return strings[+numInString];
  }

  if (numInString.length < 2) {
    return numInString;
  }

  if (numInString.length < 3) {
    return decimes(numInString);
  }

  if (numInString.length < 4) { 
    if (numInString.slice(1) === '00') {
      return strings[numInString[0]] + ' hundred'
    }
    return strings[numInString[0]] + ' hundred ' + decimes(numInString.slice(1))
  }

  function decimes(numInString) {
    if (+numInString < 20) {
      return strings[+numInString];
    }

    return +numInString[1] === 0 ? decs[numInString[0]] : decs[numInString[0]] + ' ' + strings[numInString[1]];
  }
}

console.log(toReadable(20))

module.exports = toReadable

