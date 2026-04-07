import Header from "../Header";
import Search from "../Search";
import Checkbox from "../Checkbox";
import CarList from "./CarList";

function CarContainer() {
  return (
    <div className="container mx-auto p-4">
      <Header title="My Car" />
      <div className="grid grid-cols-3 gap-4 items-center justify-center mb-4">
        <Search placeholder="Search car..." id="car-search"/>
        <Checkbox id="car-checkbox" label="Show Premium Cars" />
      </div>
      <CarList />
    </div>
  );
}

export default CarContainer;
