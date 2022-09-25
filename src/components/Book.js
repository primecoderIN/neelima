import "./Book.css"
const Book = ({
  imageUrl = "https://m.media-amazon.com/images/I/818e+fq7+BL._AC_UL320_.jpg",
  authorName = "Norman Lewis",
  bookName = "Word power made easy",
}) => {
  return (
    <div className="bookWrapper">
      <img src={imageUrl} alt='' className="bookImage" />
      <h3 className="bookName">{bookName}</h3>
      <span className="authorName">By : {authorName}</span>
    </div>
  );
};

export default Book;
