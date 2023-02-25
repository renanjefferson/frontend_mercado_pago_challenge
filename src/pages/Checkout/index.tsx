import { useState } from 'react';
import BarCodeForm from '../../components/BarCodeForm';
import CardForm from '../../components/CardForm';
import Payment from '../../components/Payment';
import * as S from './styles';

const Checkout: React.FC = () => {
  const [paymentType, setPaymentType] = useState<string>('payment-method');

  const selectPaymentType = (type: string) => {
    setPaymentType(type);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Meios de pagamento</S.Title>

        {paymentType === 'payment-method' && (
          <Payment paymentType={selectPaymentType} />
        )}
        {paymentType === 'cardToken' && (
          <CardForm paymentType={selectPaymentType} />
        )}
        {paymentType === 'bolbradesco' && (
          <BarCodeForm paymentType={selectPaymentType} />
        )}
      </S.Content>
    </S.Container>
  );
};

export default Checkout;
