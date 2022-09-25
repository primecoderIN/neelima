import Book from "../components/Book";

const books = [
  {
    imageUrl: "https://m.media-amazon.com/images/I/818e+fq7+BL._AC_UL320_.jpg",
    bookName: "Thermodynamics",
    authorName: "Newton",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/516teHFu7gL._AC_UL320_.jpg",
    bookName: "The art of sleeping",
    authorName: "Random Man",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/71Pl6DkHW4L._AC_UL320_.jpg",
    bookName: "The art of eating well",
    authorName: "Neelima",
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/71owQ+uazdL._AC_UL320_.jpg",
    bookName: "Modern Physics",
    authorName: "Sanjeev Kumar",
  },
];

const BookList = () => {
  return (
    <>
      {books.map((book, index) => {
        return (
          <Book
            key={index}
            imageUrl={book.imageUrl}
            authorName={book.authorName}
            bookName={book.bookName}
          />
        );
      })}
    </>
  );
};

export default BookList;

// const BookList = () => {
//   return (
//     <>
//       {books.map(({ imageUrl, authorName, bookName }, index) => {
//         return (
//           <Book
//             key={index}
//             imageUrl={imageUrl}
//             authorName={authorName}
//             bookName={bookName}
//           />
//         );
//       })}
//     </>
//   );
// };

//Both are doing same job here
