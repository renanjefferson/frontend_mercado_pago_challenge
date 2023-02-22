import CardForm from '../../components/CardForm';
import * as S from './styles';

const Checkout: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Métodos de pagamento</S.Title>
        <CardForm />
      </S.Content>
    </S.Container>
  );
};

export default Checkout;
