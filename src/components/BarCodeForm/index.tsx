import Button from '../Button';
import * as S from './styles';

interface BarCodeFormProps {
  paymentMethod: (method: string) => void;
}

const BarCodeForm: React.FC<BarCodeFormProps> = ({ paymentMethod }) => {
  return (
    <S.Container>
      <S.Title>Boleto bancário</S.Title>

      <S.ChangePaymentMethod>
        <Button isFullWidth onClick={() => paymentMethod('payment-method')}>
          <span>Alterar forma de pagamento</span>
        </Button>
      </S.ChangePaymentMethod>
    </S.Container>
  );
};

export default BarCodeForm;
