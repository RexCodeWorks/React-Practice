import { useSelector } from "react-redux";

function CarValue() {
    const totlaCost = useSelector(({ cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return filteredCars.reduce((acc, car) => {
            return acc + car.cost;
        }, 0);
    });

    return (
        <div className="car-value">
            Total Cost: ${totlaCost}
        </div>
    );
}

export default CarValue;