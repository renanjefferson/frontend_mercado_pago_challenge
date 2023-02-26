import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { FieldError } from 'react-hook-form';
import {
  maskCardNumber,
  maskCardExpirationMonth,
  maskCardExpirationYear,
  maskSecurityCode,
  maskIdentificationNumber,
} from '../../utils/masks';
import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  isFullWidth?: boolean;
  mask?:
    | 'cardNumber'
    | 'cardExpirationMonth'
    | 'cardExpirationYear'
    | 'securityCode'
    | 'identificationNumber';
  secureThumbnail?: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = 'text',
      error,
      isFullWidth = false,
      mask,
      secureThumbnail,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const handleKeyUp = (el: React.FormEvent<HTMLInputElement>) => {
      switch (mask) {
        case 'cardNumber':
          return maskCardNumber(el);
        case 'cardExpirationMonth':
          return maskCardExpirationMonth(el);
        case 'cardExpirationYear':
          return maskCardExpirationYear(el);
        case 'securityCode':
          return maskSecurityCode(el);
        case 'identificationNumber':
          return maskIdentificationNumber(el);
        default:
          return '';
      }
    };

    return (
      <>
        <S.Container>
          <S.Input
            id={id}
            error={error}
            isFullWidth={isFullWidth}
            {...props}
            ref={ref}
            type={type}
            onKeyUp={handleKeyUp}
          />
          {secureThumbnail && (
            <S.Card
              src={secureThumbnail}
              alt="Imagem ilustrativa da bandeira do cartão de crédito"
              aria-hidden
            />
          )}
        </S.Container>
        {!!error && (
          <S.ErrorMessage role="alert">
            <FiAlertCircle size={13} />
            {error.message}
          </S.ErrorMessage>
        )}
      </>
    );
  }
);

export default Input;
