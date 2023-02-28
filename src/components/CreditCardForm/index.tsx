import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import Button from '../Button';
import Input from '../Input';
import { ICreditCardForm } from '../../types/Forms';
import { IPaymentSubmit } from '../../types/Payment';
import * as S from './styles';
import api from '../../services/api';

interface CreditCardFormProps {
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

const CreditCardForm: React.FC<CreditCardFormProps> = ({ paymentType }) => {
  //@ts-ignore
  const MP = new window.MercadoPago(import.meta.env.VITE_MP_TEST_PUBLIC_KEY, {
    locale: 'pt-BR',
  });
  const [secureThumbnail, setSecureThumbnail] = useState<string>('');
  const [paymentMethodId, setPaymentMethodId] = useState<string>('');
  const [issuerId, setIssuerId] = useState<number>(0);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICreditCardForm>({
    resolver: yupResolver(schema),
  });

  const paymentSubmit: IPaymentSubmit = async (data) => {
    const response = await api.post('/payments/card', data);
    return response;
  };

  const onSubmit: SubmitHandler<ICreditCardForm> = async (data) => {
    try {
      const cardToken = await MP.createCardToken({
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
      });

      paymentSubmit({
        transaction_amount: 3200,
        token: cardToken.id,
        description: 'Apple Watch Series 8 GPS',
        installments: 1,
        payment_method_id: paymentMethodId,
        issuer_id: issuerId,
        payer: {
          email: data.cardholderEmail,
          identification: {
            type: 'CPF',
            number: data.identificationNumber.replace(/[^a-zA-Z0-9]/g, ''),
          },
        },
      })
        .then((transaction) => {
          const { status, data } = transaction;
          if (status === 200 || status === 201) {
            toast.success(`Compra realizada com sucesso!`, {
              role: 'alert',
            });

            navigate(`/payment/success/${data.id}`);
          } else {
            toast.error('Erro interno do servidor!', {
              role: 'alert',
            });
          }
        })
        .catch(() => {
          toast.error('Erro ao iniciar a compra!', {
            role: 'alert',
          });
        });
    } catch (error) {
      toast.error('Certifique-se que todos os dados estão corretos!', {
        role: 'alert',
      });
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
                setIssuerId(results[0].issuer.id);
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
        <Button isFullWidth type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Processando pagamento...</span>
          ) : (
            <>
              <FiLock />
              <span>Pagar R$3.200</span>
            </>
          )}
        </Button>
        <input id="paymentMethodId" type="hidden" value={paymentMethodId} />
      </S.Form>
    </S.Container>
  );
};

export default CreditCardForm;
