import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  ButtonHTMLAttributes, ReactNode, memo,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  CLEAR_PADDING = 'clear_padding',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  OUTLINE_GREEN = 'outline_green',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
  LISTBOX = 'listbox'
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?:ButtonSize;
  disabled?:boolean;
  children?: ReactNode;
}

export const Button = memo((props:ButtonProps) => {
  const {
    children, className, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled, ...otherProps
  } = props;
  const mods:Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
