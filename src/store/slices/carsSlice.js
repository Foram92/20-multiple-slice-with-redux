//this slice is for listing the cars; searchTerm of cars and listing = addCar and removeCar; to add car we need name,cost, and to removecar we need id so we generate id in addcar

import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
//whenever we use array, to add value we use push method
            state.data.push({
//assumption: action.payload === {name: 'ab', cost: 142} 
                name: action.payload.name,
                cost: action.payload.cost,
//this is redux toolkit's propety to generate random number, we use it to generate reandom id
                id: nanoid()
            });
        },
//assumption: action.payload === the id of car we want to remove 
        removeCar(state, action) {
//says: keep cars which's id does not match with action.payload id(given by dispatch); means remove car which's id match 
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;