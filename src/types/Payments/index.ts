export type ICreditCardPayment = (data: {
  transaction_amount: number;
  token: string;
  description: string;
  installments: number;
  payment_method_id: string;
  issuer_id: number;
  payer: {
    email: string;
    identification: {
      type: 'CPF' | 'CNPJ';
      number: string;
    };
  };
}) => Promise<any>;

export type IBarCodePayment = (data: {
  transaction_amount: number;
  description: string;
  installments: number;
  payment_method_id: string;
  payer: {
    email: string;
    first_name: string;
    last_name: string;
    identification: {
      type: string;
      number: string;
    };
  };
}) => Promise<any>;
