export type PaymentSubmit = (data: {
  token: string;
  payment_method_id?: string;
  transaction_amount: number;
  description: string;
  installments: number;
  email?: string;
}) => Promise<{
  status: number;
  body: {
    id: number;
    transaction_amount: number;
    date_approved: string;
    first_six_digits: string;
    last_four_digits: string;
    display_name: string;
  };
}>;
