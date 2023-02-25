import Button from '../Button';
import * as S from './styles';

interface BarCodeFormProps {
  paymentType: (type: string) => void;
}

const BarCodeForm: React.FC<BarCodeFormProps> = ({ paymentType }) => {
  return (
    <S.Container>
      <S.Title>Boleto bancário</S.Title>

      <S.ChangePaymentMethod>
        <Button isFullWidth onClick={() => paymentType('payment-method')}>
          <span>Alterar forma de pagamento</span>
        </Button>
      </S.ChangePaymentMethod>
    </S.Container>
  );
};

export default BarCodeForm;
