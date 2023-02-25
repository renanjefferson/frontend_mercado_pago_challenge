import { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

interface CardFormProps {
  paymentType: (type: string) => void;
}

interface CardFormInputs {
  cardNumber: number;
  cardExpirationMonth: number;
  cardExpirationYear: number;
  securityCode: number;
  cardholderName: string;
  docNumber: string;
  cardholderEmail: string;
}

const schema = yup.object().shape({
  cardNumber: yup
    .number()
    .typeError('Número do cartão é obrigatório')
    .integer()
    .positive(),
  cardExpirationMonth: yup
    .number()
    .typeError('Mês obrigatório')
    .integer()
    .positive(),
  cardExpirationYear: yup
    .number()
    .typeError('Ano obrigatório')
    .integer()
    .positive(),
  securityCode: yup
    .number()
    .typeError('CVV é Obrigatório')
    .positive('Mês deve ser maior que zero'),
  cardholderName: yup.string().required('Dado obrigatório'),
  docNumber: yup.string().required('Dado obrigatório'),
  cardholderEmail: yup.string().required('Dado obrigatório'),
});

const CardForm: React.FC<CardFormProps> = ({ paymentType }) => {
  const MercadoPago = new window.MercadoPago(
    import.meta.env.VITE_MP_TEST_PUBLIC_KEY
  );
  const [secureThumbnail, setSecureThumbnail] = useState<string>('');
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
            mask="cardNumber"
            onChange={async (el) => {
              const { value } = el.currentTarget;

              if (value.length >= 7) {
                const bin = value.substring(0, 7).replace(/\D/g, '');
                const { results } = await MercadoPago.getPaymentMethods({
                  bin,
                });
                setSecureThumbnail(results[0].secure_thumbnail);
              }
            }}
            secureThumbnail={secureThumbnail}
          />
        </S.Wide>
        <S.Fields>
          <S.Flex>
            <S.Box>
              <S.Label htmlFor="cardExpirationMonth">Mês</S.Label>
              <Input
                id="cardExpirationMonth"
                placeholder="MM"
                maxLength={2}
                data-checkout="cardExpirationMonth"
                isFullWidth
                {...register('cardExpirationMonth')}
                error={errors.cardExpirationMonth}
                mask="cardExpirationMonth"
              />
            </S.Box>
            <S.Box>
              <S.Label htmlFor="cardExpirationYear">Ano</S.Label>
              <Input
                id="cardExpirationYear"
                placeholder="AA"
                maxLength={2}
                data-checkout="cardExpirationYear"
                isFullWidth
                {...register('cardExpirationYear')}
                error={errors.cardExpirationYear}
                mask={'cardExpirationYear'}
              />
            </S.Box>
          </S.Flex>
          <S.Box>
            <S.Label htmlFor="securityCode">CVC/CVV</S.Label>
            <Input
              id="securityCode"
              placeholder="123"
              maxLength={4}
              data-checkout="securityCode"
              isFullWidth
              {...register('securityCode')}
              error={errors.securityCode}
              mask={'securityCode'}
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
            mask={'docNumber'}
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
        <S.ChangePaymentMethod>
          <Button isFullWidth onClick={() => paymentType('payment-method')}>
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
