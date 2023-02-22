import { FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

interface CardFormInputs {
  cardNumber: string;
  expirationDate: string;
  securityCode: number;
  cardholderName: string;
  docNumber: string;
  cardholderEmail: string;
}
const schema = yup.object().shape({
  cardNumber: yup.string().required('Caracteres de número de cartão inválidos'),
  expirationDate: yup.string().required('Caracteres de data inválidos'),
  securityCode: yup.string().required('Caracteres de CVV inválidos'),
  cardholderName: yup.string().required('Dado obrigatório'),
  docNumber: yup.string().required('Dado obrigatório'),
  cardholderEmail: yup.string().required('Dado obrigatório'),
});

const CardForm: React.FC = () => {
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
        <S.Title>Cartão de crédito ou débito</S.Title>
        <S.Wide>
          <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
          <Input
            id="cardNumber"
            isFullWidth
            placeholder="1234 1234 1234 1234"
            maxLength={25}
            autoComplete="off"
            inputMode="numeric"
            {...register('cardNumber')}
            error={errors.cardNumber}
          />
        </S.Wide>
        <S.Fields>
          <S.Box>
            <S.Label htmlFor="expirationDate">Data de vencimento</S.Label>
            <Input
              id="expirationDate"
              isFullWidth
              placeholder="mm/aaaa"
              maxLength={7}
              autoComplete="off"
              inputMode="numeric"
              {...register('expirationDate')}
              error={errors.expirationDate}
            />
          </S.Box>
          <S.Box>
            <S.Label htmlFor="securityCode">Código de segurança</S.Label>
            <Input
              id="securityCode"
              isFullWidth
              placeholder="123"
              maxLength={4}
              autoComplete="off"
              inputMode="numeric"
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
            isFullWidth
            placeholder="RENAN J R SILVA"
            {...register('cardholderName')}
            error={errors.cardholderName}
          />
        </S.Wide>
        <S.Wide>
          <S.Label htmlFor="docNumber">CPF</S.Label>
          <Input
            id="docNumber"
            isFullWidth
            placeholder="999.999.999-99"
            {...register('docNumber')}
            error={errors.docNumber}
          />
        </S.Wide>
        <S.Wide>
          <S.Label htmlFor="cardholderEmail">E-mail</S.Label>
          <Input
            type={'email'}
            id="cardholderEmail"
            isFullWidth
            placeholder="exemplo@email.com"
            {...register('cardholderEmail')}
            error={errors.cardholderEmail}
          />
        </S.Wide>
        <Button>
          <FiLock />
          <span>Pagar R$50</span>
        </Button>
      </S.Form>
    </S.Container>
  );
};

export default CardForm;
