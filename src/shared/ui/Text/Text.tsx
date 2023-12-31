import { classNames } from 'shared/lib/classNames/classNames';
import {
  CSSProperties, Ref, forwardRef, memo,
} from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}
export enum TextSize {
  M = 'size_m',
  L = 'size_l',
  S = 'size_s',
}
export enum TextWeight {
  REGULAR = 'weight_regular',
  SEMIBOLD = 'weight_semibold',
  BOLD = 'weight_bold',
}
interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: string;
  size?: TextSize;
  'data-testid'?: string;
  weight?: TextWeight;
  style?: CSSProperties;
}
type HeaderTagType = 'h1' | 'h2' | 'h3';
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

const TextComponent = forwardRef<HTMLDivElement, TextProps>((props: TextProps, ref) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
    weight = TextWeight.REGULAR,
    style,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[align],
        cls[theme],
        cls[size],
        cls[weight],
      ])}
      ref={ref}
      style={style}
    >
      {title && <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>{title}</HeaderTag>}
      {text && <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>{text}</p>}
    </div>
  );
});
export const Text = memo(TextComponent);
