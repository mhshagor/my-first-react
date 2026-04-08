import PropTypes from 'prop-types';
import BookDetails from "./BookDetails"
import FeatureBook from "./FeatureBook"
function BookRow({ book, onFeaturedBook }) {
  return (
    <div className='flex items-center justify-between p-4 bg-white shadow hover:shadow-md rounded-lg'>
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook book={book} onFeaturedBook={onFeaturedBook} />
    </div>
  )
}

BookRow.propTypes = {
  book: PropTypes.object.isRequired,
  onFeaturedBook: PropTypes.func.isRequired,
};

export default BookRow