import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();

//get data mini reducer 'data' from carsSlice by using useSelector; we hasto write data bcoz there's two piece of state (searchTerm and data(car))
    // const cars = useSelector((state) => {
    //     return state.cars.data;
    // });

//above code is okey but we want to filter out data(car) which was search and shows that car, so..

//useSelector does not take whole state object, it's only contain piece of state cars's data and searchTerm
//data.filter will filter every car and see if searchTerm includes in car name, if that true then take that car and list(print) it into screen 
    const cars = useSelector(({ cars: { data, searchTerm } }) => {
        return data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }
   
    const renderdCars = cars.map((car) => {
        return <div key={car.id} className="panel">
            <p>
                { car.name } - Rs{ car.cost }
            </p>
            <button 
                className="button is-danger" 
                onClick={() => handleCarDelete(car)}>
                    Delete
            </button>
        </div>
    });

    return (
        <div className="car-list">
            { renderdCars }
            <hr />
        </div>
    );
}

export default CarList;