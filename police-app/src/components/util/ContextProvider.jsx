/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";

const PoliceContext = createContext(null)


export function usePoliceContext() {
  return useContext(PoliceContext)
}
import reducer from "./reducer";

const PoliceContextProvider = ({
    children
}) => {
    const [ data, dispatch ] = useReducer(reducer, null)

    
    const sharedValue = {
        data: data,
        dispatch: dispatch,
    }


    return (
        <PoliceContext.Provider value={sharedValue}>
            {children}
        </PoliceContext.Provider>
    );
};

export default PoliceContextProvider;