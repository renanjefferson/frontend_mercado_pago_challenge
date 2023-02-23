import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { FieldError } from 'react-hook-form';
import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  isFullWidth?: boolean;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type = 'text', error, isFullWidth = false, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
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
          />
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
