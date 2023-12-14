/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";


const employeeSlice = createSlice({
    name: 'employee',
    initialState: [],
    reducers: {
        setData: (state, action) => {
            state = action.payload
            return state
        },
        addEmployee: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { setData, addEmployee } = employeeSlice.actions

export default employeeSlice.reducer