import { useState } from "react";

import './App.css';


function App() {
  const cars = [
    { id: 1, brand: "BMW", model: "E30", year: 1990, color: "red" },
    { id: 2, brand: "bmw", model: "190E", year: 1987, color: "black" },
    { id: 3, brand: "Audi", model: "80", year: 1993, color: "silver" },
    { id: 4, brand: "Toyota", model: "Supra", year: 1998, color: "white" },
    { id: 5, brand: "Nissan", model: "Skyline", year: 1999, color: "blue" },
    { id: 6, brand: "Ford", model: "Mustang", year: 1969, color: "yellow" },
    { id: 7, brand: "Chevrolet", model: "Camaro", year: 1970, color: "green" },
    { id: 8, brand: "Honda", model: "Civic", year: 2005, color: "gray" },
    { id: 9, brand: "Volkswagen", model: "Golf", year: 2012, color: "white" },
    { id: 10, brand: "Mazda", model: "RX-7", year: 1995, color: "red" },
    { id: 11, brand: "Subaru", model: "Impreza", year: 2004, color: "blue" },
    { id: 12, brand: "Lexus", model: "IS200", year: 2001, color: "silver" },
    { id: 13, brand: "Volvo", model: "240", year: 1985, color: "black" },
    { id: 14, brand: "Opel", model: "Kadett", year: 1983, color: "beige" },
    { id: 15, brand: "Renault", model: "Clio", year: 2008, color: "purple" },
  ];

  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [SearchCars, setSearchCars] = useState(cars);

  const Search = () => {
    const filtered = cars.filter((car) => {
      return (
        (brand === "" || car.brand.toLowerCase().includes(brand.toLowerCase())) &&
        (year === "" || car.year.toString().includes(year)) &&
        (color === "" || car.color.toLowerCase().includes(color.toLowerCase()))
      );
    });
    setSearchCars(filtered);
    setBrand("");
    setYear("");
    setColor("");
  };

  const ShowAll = () => {
    setSearchCars(cars);
    setBrand("");
    setYear("");
    setColor("");
  };

  return (
    <div className="App">
      <div className="btn_wrapper">
        <input
          type="text"
          placeholder="Search by brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="inp"
        />
        <input
          type="text"
          placeholder="Search by year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="inp"
        />
        <input
          type="text"
          placeholder="Search by color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="inp"
        />
        <button className="btn" id="all" onClick={Search}>
          Search
        </button>
        <button className="btn" id="all" onClick={ShowAll}>
          Show all
        </button>
      </div>

      <section className="catalog">
        {SearchCars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="img_car"></div>
            <h3>{car.brand} {car.model}</h3>
            <p>Year: {car.year}</p>
            <div className="for_color">
              <p>Color: {car.color}</p>
              <div className="block_color" style={{backgroundColor: car.color}}></div>
            </div>
            
          </div>
        ))}
      </section>
      <footer class="foot">
        <div class="f_block">
          <ul>
            <li>Neil Armstrong</li>
            <li>Alan Bean</li>
            <li>Peter Conrad</li>
            <li>Edgar Mitchell</li>
            <li>Alan Shepard</li>
          </ul>
        </div>
        <div class="f_block">
          <div className="logo_f" id="inst"></div>
          <div className="logo_f" id="fb"></div>
          
        </div>
      </footer>
    </div>
  );
}


export default App;
