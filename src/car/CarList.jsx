import CarCard from "./CarCard";
import PropTypes from "prop-types";
function CarList({ searchTerm, cars }) {
  const rows = [];
  cars.forEach((car) => {
    if(car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rows.push(<CarCard key={car.id} car={car} />);
  });
  return (
  <div className="grid grid-cols-3 gap-4">
    {rows}
  </div>
  )
}

CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
};
export default CarList;
