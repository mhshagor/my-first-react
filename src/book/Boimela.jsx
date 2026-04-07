import Header from "../Header";
import Search from "../Search";
import BookList from "./BookList";
function Boimela() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Header title="Boimela" />
        <Search placeholder="Search Book..." id="book-search"/>
      </div>
      <BookList />
    </div>
  );
}

export default Boimela;
