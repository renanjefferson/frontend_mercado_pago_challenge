import {
  ButtonHTMLAttributes,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
} from 'react';
import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isFullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { children, isFullWidth = false }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <S.Button ref={ref} isFullWidth={isFullWidth}>
        {children}
      </S.Button>
    );
  }
);

export default Button;
