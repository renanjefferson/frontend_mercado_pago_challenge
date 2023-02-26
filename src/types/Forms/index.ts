export type ICreditCardForm = {
  cardNumber: string;
  cardExpirationMonth: string;
  cardExpirationYear: string;
  securityCode: string;
  cardholderName: string;
  identificationNumber: string;
  cardholderEmail: string;
};

export type IBarCodeForm = {
  firstName: string;
  lastName: string;
  identificationNumber: string;
  email: string;
};
