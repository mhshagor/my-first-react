import PropTypes from "prop-types";
function Search({ placeholder, searchTerm, onSearchTerm }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => onSearchTerm(e.target.value)}
      className="border rounded-md p-2 w-full"
    />
  );
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
};

export default Search;
