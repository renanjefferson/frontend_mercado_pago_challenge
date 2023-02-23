import CardForm from '../../components/CardForm';
import { useState } from 'react';
import Payment from '../../components/Payment';
import * as S from './styles';
import BarCodeForm from '../../components/BarCodeForm';

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('payment-method');

  const selectPaymentMethod = (type: string) => {
    setPaymentMethod(type);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Meios de pagamento</S.Title>

        {paymentMethod === 'payment-method' && (
          <Payment paymentMethod={selectPaymentMethod} />
        )}
        {paymentMethod === 'cardToken' && (
          <CardForm paymentMethod={selectPaymentMethod} />
        )}
        {paymentMethod === 'bolbradesco' && (
          <BarCodeForm paymentMethod={selectPaymentMethod} />
        )}
      </S.Content>
    </S.Container>
  );
};

export default Checkout;
