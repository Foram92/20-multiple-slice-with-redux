import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
    const dispatch = useDispatch();

//get name peice of state from slices/formSlice-> formsSlice using useSelector
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        };
    });
    
    const handleNameChannge = (event) => {
//whatever user type in input is going to be event.target.value property
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
//whatever no is set it in integer on and of user type not a nubmer then set 0
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
//browser is trying to submit page with reload the page which we don't want, so to prevent that browser's default behaviour we use this
        event.preventDefault();
//when user click submit button we want to list out name and cost so that want carSlice's addCar reducer which recieve name and cost 
        dispatch(addCar({ name, cost }));
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                            className="input is-expanded" 
                            value={name} 
                            onChange={handleNameChannge} 
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                            className="input is-expanded" 
                            value={ cost || ''} 
                            type='number'
                            onChange={handleCostChange} 
                        />
                    </div>
                </div>
                <div className='feild'>
                    <button className='button is-link'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CarForm;