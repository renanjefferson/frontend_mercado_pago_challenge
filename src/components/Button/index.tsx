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
    { children, isFullWidth = false, ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <S.Button ref={ref} isFullWidth={isFullWidth} {...props}>
        {children}
      </S.Button>
    );
  }
);

export default Button;
