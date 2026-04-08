import { Star } from "lucide-react";
import PropTypes from 'prop-types';
function FeatureBook({ book, onFeaturedBook }) {
  return (
    <button onClick={() => onFeaturedBook(book.id)} className="text-yellow-500 hover:text-yellow-600 focus:outline-none">
      <Star color={book.featured ? 'green' : 'black'} />
    </button>
  );
}

FeatureBook.propTypes = {
  book: PropTypes.object.isRequired,
  onFeaturedBook: PropTypes.func.isRequired,
};

export default FeatureBook;
