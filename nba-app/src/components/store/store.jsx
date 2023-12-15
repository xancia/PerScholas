import { configureStore } from "@reduxjs/toolkit";
import teamDataReducer from "./teamDataSlice";

export const store = configureStore({
    reducer: {
        teamData: teamDataReducer,
    }
})