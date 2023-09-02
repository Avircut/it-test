interface ImageLinks{
  smallThumbnail: string;
  thumbnail: string;
}
interface Book {
  title: string;
  authors: string[];
  publisher: string;
  description: string;
  pageCount: number;
  categories: string[];
  imageLinks: ImageLinks
}
interface Price {
  amount: number;
  currencyCode: string;
}
interface SaleInfo{
  retailPrice: Price;
}
export interface Volume {
  id: string;
  volumeInfo: Book;
  saleInfo: SaleInfo;
  buyLink: string;
}
