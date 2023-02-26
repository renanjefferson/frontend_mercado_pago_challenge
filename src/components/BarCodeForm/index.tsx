import { FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import { IBarCodeForm } from '../../types/Forms';
import * as S from './styles';
interface IBarCodeFormProps {
  paymentType: (type: string) => void;
}

const schema = yup.object().shape({
  firstName: yup.string().required('Nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  identificationNumber: yup.string().required('Dado obrigatório'),
  email: yup.string().required('E-mail é obrigatório'),
});

const BarCodeForm: React.FC<IBarCodeFormProps> = ({ paymentType }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBarCodeForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IBarCodeForm> = async (data) => {
    // TODO - Type Request
    // {
    //   transaction_amount: 3200,
    //   description: 'Apple Watch Series 8 GPS',
    //   payment_method_id: 'bolbradesco',
    //   payer: {
    //     email: data.email,
    //     first_name: data.firstName,
    //     last_name: data.lastName,
    //     identification: {
    //       type: 'CPF',
    //       number: data.identificationNumber,
    //     },
    //   }
    // }
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Boleto bancário</S.Title>
        <S.Wide>
          <S.Label htmlFor="firstName">Nome</S.Label>
          <Input
            id="firstName"
            placeholder="RENAN"
            autoComplete="off"
            isFullWidth
            {...register('firstName')}
            error={errors.firstName}
          />
        </S.Wide>
        <S.Wide>
          <S.Label htmlFor="lastName">Sobrenome</S.Label>
          <Input
            id="lastName"
            placeholder="JEFFERSON RODRIGUES SILVA"
            autoComplete="off"
            isFullWidth
            {...register('lastName')}
            error={errors.lastName}
          />
        </S.Wide>
        <S.Wide>
          <S.Label htmlFor="identificationNumber">CPF</S.Label>
          <Input
            type={'tel'}
            id="identificationNumber"
            placeholder="999.999.999-99"
            isFullWidth
            {...register('identificationNumber')}
            error={errors.identificationNumber}
            mask={'identificationNumber'}
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
          <Button isFullWidth onClick={() => paymentType('payment-method')}>
            <span>Alterar forma de pagamento</span>
          </Button>
        </S.ChangePaymentMethod>
        <Button isFullWidth type="submit">
          <FiLock />
          <span>Pagar R$3.200</span>
        </Button>
      </S.Form>
    </S.Container>
  );
};

export default BarCodeForm;
