export function getImage(input) {
  switch (input) {
    case 'visa':
      return require('./visa.png');
    case 'amex':
      return require('./amex.png');
    case 'dinersclub':
      return require('./dinersclub.png');
    case 'discover':
      return require('./discover.png');
    case 'jcb':
      return require('./jcb.png');
    case 'mastercard':
      return require('./mastercard.png');
    case 'troy':
      return require('./troy.png');
    case 'unionpay':
      return require('./unionpay.png');
  }
}
