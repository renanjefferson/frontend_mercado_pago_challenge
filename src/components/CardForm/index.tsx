import { useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Button from '../Button';
import Input from '../Input';
import { CreditCardForm } from '../../types/Forms';
import { PaymentSubmit } from '../../types/Payment';
import * as S from './styles';
interface CardFormProps {
  paymentType: (type: string) => void;
}

const schema = yup.object().shape({
  cardNumber: yup.string().required('Número do cartão é obrigatório'),
  cardExpirationMonth: yup.string().required('Mês obrigatório'),
  cardExpirationYear: yup.string().required('Ano obrigatório'),
  securityCode: yup.string().required('CVV é Obrigatório'),
  cardholderName: yup.string().required('Dado obrigatório'),
  identificationNumber: yup.string().required('Dado obrigatório'),
  cardholderEmail: yup.string().required('Dado obrigatório'),
});

const CardForm: React.FC<CardFormProps> = ({ paymentType }) => {
  //@ts-ignore
  const MP = new window.MercadoPago(import.meta.env.VITE_MP_TEST_PUBLIC_KEY, {
    locale: 'pt-BR',
  });
  const [secureThumbnail, setSecureThumbnail] = useState<string>('');
  const [paymentMethodId, setPaymentMethodId] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreditCardForm>({
    resolver: yupResolver(schema),
  });

  const paymentSubmit: PaymentSubmit = async (data) => {
    const response = await axios.post('http://localhost:5000/', data);
    return response.data;
  };

  const onSubmit: SubmitHandler<CreditCardForm> = async (data) => {
    try {
      await MP.createCardToken(
        {
          cardNumber: data.cardNumber.replace(/\D/g, ''),
          cardholderName: data.cardholderName,
          cardExpirationMonth: data.cardExpirationMonth,
          cardExpirationYear: data.cardExpirationYear,
          securityCode: data.securityCode,
          identificationType: 'CPF',
          identificationNumber: data.identificationNumber.replace(
            /[^a-zA-Z0-9]/g,
            ''
          ),
        },
        (status: number, response: any) => {
          if (status === 200 || status === 201) {
            paymentSubmit({
              token: response.id,
              payment_method_id: paymentMethodId,
              transaction_amount: 3200,
              description: 'Apple Watch Series 8 GPS',
              installments: 1,
              email: data.cardholderEmail,
            })
              .then((data: any) => {
                const { status } = data;

                if (status === 200) {
                  // toast.success('Compra realizada com sucesso!')
                  console.log('Compra realizada com sucesso!');
                } else {
                  //toast.error('Erro interno do servidor!')
                  console.log('Erro interno do servidor!');
                }
              })
              .catch(() => {
                //toast.error('Erro ao iniciar a compra!')
                console.log('Erro ao inicar a compra!');
              })
              .finally(function () {
                MP.clearSession();
              });
          } else if (status === 423) {
            // toast.error('Espere um momento e tente novamente.');
            console.log('Espere um momento e tente novamente.');
          } else {
            //toast.error('Certifique-se que todos os dados estão corretos!');
            console.log('Certifique-se que todos os dados estão corretos!');
          }
        }
      );
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
            type={'tel'}
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
            autoComplete="off"
            isFullWidth
            {...register('cardNumber')}
            error={errors.cardNumber}
            mask="cardNumber"
            onChange={async (el) => {
              const { value } = el.currentTarget;

              if (value.length >= 7) {
                const bin = value.substring(0, 7).replace(/\D/g, '');
                const { results } = await MP.getPaymentMethods({
                  bin,
                });
                setPaymentMethodId(results[0].id);
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
                type={'tel'}
                id="cardExpirationMonth"
                placeholder="MM"
                autoComplete="off"
                maxLength={2}
                isFullWidth
                {...register('cardExpirationMonth')}
                error={errors.cardExpirationMonth}
                mask="cardExpirationMonth"
              />
            </S.Box>
            <S.Box>
              <S.Label htmlFor="cardExpirationYear">Ano</S.Label>
              <Input
                type={'tel'}
                id="cardExpirationYear"
                placeholder="AAAA"
                autoComplete="off"
                maxLength={4}
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
              type={'tel'}
              id="securityCode"
              placeholder="123"
              autoComplete="off"
              maxLength={4}
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
            autoComplete="off"
            isFullWidth
            {...register('cardholderName')}
            error={errors.cardholderName}
          />
        </S.Wide>
        <S.Wide>
          <S.Label htmlFor="identificationNumber">CPF</S.Label>
          <Input
            id="identificationNumber"
            placeholder="999.999.999-99"
            isFullWidth
            {...register('identificationNumber')}
            error={errors.identificationNumber}
            mask={'identificationNumber'}
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
          <span>Pagar R$3.200</span>
        </Button>
        <input id="paymentMethodId" type="hidden" value={paymentMethodId} />
      </S.Form>
    </S.Container>
  );
};

export default CardForm;
