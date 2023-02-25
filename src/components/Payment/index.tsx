import { FaBarcode, FaRegCreditCard } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import Button from '../Button';
import * as S from './styles';

interface PaymentProps {
  paymentType: (type: string) => void;
}

const Payment: React.FC<PaymentProps> = ({ paymentType }) => {
  return (
    <S.Container>
      <S.Title>Como você deseja pagar?</S.Title>
      <Button isFullWidth onClick={() => paymentType('bolbradesco')}>
        <S.Box>
          <FaBarcode size={16} />
          <h2>Boleto Bancário</h2>
        </S.Box>
        <FiChevronRight size={16} />
      </Button>
      <Button isFullWidth onClick={() => paymentType('cardToken')}>
        <S.Box>
          <FaRegCreditCard size={16} />
          <h2>Cartão de crédito</h2>
        </S.Box>
        <FiChevronRight size={16} />
      </Button>
    </S.Container>
  );
};

export default Payment;
