function Search({ placeholder, id }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      id={id}
      name={id}
      className="border rounded-md p-2 w-full"
    />
  );
}

export default Search;
