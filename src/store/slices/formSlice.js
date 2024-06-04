//this slice is for create cars changeName defines name and changeCost defines cost
import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice ({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName (state, action) {
//whatever calls changeName will send action object which has payload, use it to change name; same as chcangeCost
            state.name = action.payload;
        },
        changeCost (state, action) {
            state.cost = action.payload;
        },
    },
//we define this bcoz whenever form submit(carForm.js) dispatch will go to cars/addCar(addCar->carsSlice) so we need to add additional things in form is clear out form so we add this 
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0
        });
    },
});

//when fromSlice.action.changeName do it will give you that fun's value
export const { changeName, changeCost } = formSlice.actions;
//this is the combine reducers, when user send actions it will go thougth this reducer
export const formReducer = formSlice.reducer;