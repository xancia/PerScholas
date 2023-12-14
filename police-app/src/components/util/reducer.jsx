/* eslint-disable no-case-declarations */
export default function reducer(state, action) {
    switch(action.type) {
        case "SET_DATA":
            const fetchedData = action.payload
            return fetchedData;
        
    }
}