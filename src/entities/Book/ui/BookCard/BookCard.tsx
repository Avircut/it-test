import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import defaultThumb from 'shared/assets/content/no-photo.png';
import { Volume } from '../../model/types/BookSchema';
import cls from './BookCard.module.scss';

interface BookCardProps {
  className?: string;
  volume?: Volume;
}

export const BookCard = (props: BookCardProps) => {
  const { className, volume } = props;
  const book = volume?.volumeInfo;
  if (!book) return null;

  return (
    <AppLink to={book.infoLink} className={cls.link} data-testid="BookCard">
      <Card>
        <VStack gap="8" className={classNames(cls.BookCard, {}, [className])}>
          <img
            className={cls.image}
            src={book?.imageLinks?.thumbnail ?? defaultThumb}
            alt={book?.title}
          />
          <Text
            className={cls.category}
            text={book?.categories ? book?.categories[0] : ''}
          />
          <Text
            className={cls.title}
            title={book?.title}
          />
          <Text
            className={cls.author}
            text={book?.authors?.join(', ')}
          />
        </VStack>
      </Card>
    </AppLink>
  );
};
