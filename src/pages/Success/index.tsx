import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingBag, FiCheck } from 'react-icons/fi';
import { FaRegCreditCard } from 'react-icons/fa';
import axios from 'axios';
import * as S from './styles';

interface ITransaction {
  id: string;
  payment_method: {
    type: string;
  };
  email: string;
  total_paid_amount?: number;
  last_four_digits?: string | null;
}
// TODO: Melhorar layout dessa página
const Success: React.FC = () => {
  // TODO: Melhorar a forma que pega transactionId(não passar na rota o id)
  const { transactionId } = useParams();
  const [transaction, setTransaction] = useState<ITransaction>(
    {} as ITransaction
  );

  useEffect(() => {
    // TODO: Buscar transação salva no backend
    (async () => {
      const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${transactionId}`,
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_MP_TEST_ACCESS_TOKEN
            }`,
          },
        }
      );

      const { data } = response;
      setTransaction({
        id: data.id,
        payment_method: {
          type: data.payment_method.type,
        },
        email: data.payer.email,
        total_paid_amount: data.transaction_details.total_paid_amount,
        last_four_digits: data.card.last_four_digits,
      });
    })();
  }, []);

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Header>
            <S.Circle>
              <FiShoppingBag size={32} />
              <S.Check>
                <FiCheck size={16} />
              </S.Check>
            </S.Circle>

            <S.Message>
              <h1>Compra concluída</h1>
              <p>pedido: {transaction.id}</p>
            </S.Message>
          </S.Header>
          <S.Main>
            <p>confirmação do pedido foi enviada para:</p>
            <strong>{transaction.email}</strong>

            {transaction.payment_method?.type === 'credit_card' && (
              <S.CreditCardContainer>
                <S.Icon>
                  <FaRegCreditCard size={16} />
                </S.Icon>
                <S.Info>
                  <p>
                    você pagou:{' '}
                    <strong>
                      {Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(Number(transaction.total_paid_amount))}
                    </strong>
                  </p>
                  <span>
                    no cartão com final ****{transaction.last_four_digits}
                  </span>
                </S.Info>
              </S.CreditCardContainer>
            )}

            {transaction.payment_method?.type === 'ticket' && (
              <S.BoletoContainer>
                <a href="#">imprimir boleto</a>
                <strong>Código de barras:</strong>
                <p>10499.79519 54000.100013 14143.373166 7 92620000127099</p>
              </S.BoletoContainer>
            )}
          </S.Main>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Success;
