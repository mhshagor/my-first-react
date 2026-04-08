import BookRow from "./BookRow";
import PropTypes from "prop-types";

function BookList({ searchTerm, books, onFeaturedBook }) {
  const rows = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(
      <BookRow book={book} key={book.id} onFeaturedBook={onFeaturedBook} />,
    );
  });

  return <div className="space-y-4">{rows}</div>;
}

BookList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onFeaturedBook: PropTypes.func.isRequired,
};

export default BookList;
