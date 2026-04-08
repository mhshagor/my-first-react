import Header from "../Header";
import Search from "../Search";
import Checkbox from "../Checkbox";
import CarList from "./CarList";
import { useState } from "react";

function CarContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const carData = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <Header title="My Car" />
      <div className="grid grid-cols-3 gap-4 items-center justify-center mb-4">
        <Search placeholder="Search car..." searchTerm={searchTerm} onSearchTerm={setSearchTerm}/>
        <Checkbox id="car-checkbox" label="Show Premium Cars" />
      </div>
      <CarList searchTerm={searchTerm} cars={carData}/>
    </div>
  );
}

export default CarContainer;
