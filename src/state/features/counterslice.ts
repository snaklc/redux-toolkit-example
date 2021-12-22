import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

interface ICounterState {
    value: number
}

const initialState: ICounterState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCounter: (state) => {
            state.value += 5;
        },
        removeCounter: (state) => {
            state.value -= 5;
        },
        //bizim proje için bu şekilde olacak
        // setWmsLayers : (state) => {
        //     const services = await RestApi.getServices()
        //     state.services = services
        // }
    }
})

export const { addCounter, removeCounter } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer