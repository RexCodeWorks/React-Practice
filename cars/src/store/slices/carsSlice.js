import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },

        // Because we cannot access othere slice(name, cost), we need to pass the name and cost as payload
        addCar: (state, action) => {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar: (state, action) => {
            // action.payload === the id of the car to remove
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;