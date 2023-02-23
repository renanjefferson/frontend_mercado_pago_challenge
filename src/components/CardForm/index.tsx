import { FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

interface CardFormProps {
  paymentMethod: (method: string) => void;
}

interface CardFormInputs {
  cardNumber: string;
  cardExpirationMonth: number;
  cardExpirationYear: number;
  securityCode: number;
  cardholderName: string;
  docNumber: string;
  email: string;
}

const schema = yup.object().shape({
  cardNumber: yup.string().required('Caracteres de número de cartão inválidos'),
  cardExpirationMonth: yup
    .string()
    .required('Mês obrigatório')
    .matches(/^[0-9]{2}$/, 'O mês não é válido'),
  cardExpirationYear: yup
    .string()
    .required('Ano obrigatório')
    .matches(/^[0-9]{2}$/, 'O ano não é válido'),
  securityCode: yup
    .string()
    .required('CVV obrigatório')
    .matches(/^[0-9]{3,4}$/, 'O CVV não é válido'),
  cardholderName: yup.string().required('Dado obrigatório'),
  docNumber: yup.string().required('Dado obrigatório'),
  email: yup.string().required('Dado obrigatório'),
});

const CardForm: React.FC<CardFormProps> = ({ paymentMethod }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<CardFormInputs> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Cartão de crédito</S.Title>
        <S.Wide>
          <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
          <Input
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
            data-checkout="cardNumber"
            isFullWidth
            {...register('cardNumber')}
            error={errors.cardNumber}
          />
        </S.Wide>
        <S.Fields>
          <S.Flex>
            <S.Box>
              <S.Label htmlFor="cardExpirationMonth">Mês</S.Label>
              <Input
                id="cardExpirationMonth"
                placeholder="MM"
                data-checkout="cardExpirationMonth"
                isFullWidth
                {...register('cardExpirationMonth')}
                error={errors.cardExpirationMonth}
              />
            </S.Box>
            <S.Box>
              <S.Label htmlFor="cardExpirationYear">Ano</S.Label>
              <Input
                id="cardExpirationYear"
                placeholder="AA"
                data-checkout="cardExpirationYear"
                isFullWidth
                {...register('cardExpirationYear')}
                error={errors.cardExpirationYear}
              />
            </S.Box>
          </S.Flex>
          <S.Box>
            <S.Label htmlFor="securityCode">Código de segurança</S.Label>
            <Input
              id="securityCode"
              placeholder="123"
              data-checkout="securityCode"
              isFullWidth
              {...register('securityCode')}
              error={errors.securityCode}
            />
          </S.Box>
        </S.Fields>
        <S.Wide>
          <S.Label htmlFor="cardholderName">
            Nome como aparece no cartão
          </S.Label>
          <Input
            id="cardholderName"
            placeholder="RENAN J R SILVA"
            data-checkout="cardholderName"
            isFullWidth
            {...register('cardholderName')}
            error={errors.cardholderName}
          />
        </S.Wide>
        <S.Wide>
          <S.Label htmlFor="docNumber">CPF</S.Label>
          <Input
            id="docNumber"
            placeholder="999.999.999-99"
            data-checkout="docNumber"
            isFullWidth
            {...register('docNumber')}
            error={errors.docNumber}
          />
        </S.Wide>
        <S.Wide>
          <S.Label htmlFor="email">E-mail</S.Label>
          <Input
            type={'email'}
            id="email"
            isFullWidth
            placeholder="exemplo@email.com"
            {...register('email')}
            error={errors.email}
          />
        </S.Wide>
        <S.ChangePaymentMethod>
          <Button isFullWidth onClick={() => paymentMethod('payment-method')}>
            <span>Alterar forma de pagamento</span>
          </Button>
        </S.ChangePaymentMethod>
        <Button isFullWidth type="submit">
          <FiLock />
          <span>Pagar R$50</span>
        </Button>
      </S.Form>
    </S.Container>
  );
};

export default CardForm;
