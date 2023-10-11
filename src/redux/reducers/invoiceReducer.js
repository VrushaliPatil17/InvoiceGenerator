
const initialState= {
    invoiceData: []        
};

export const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INVOICE': { 
            return {
                ...state,
                invoiceData: [...state.invoiceData, action.payload],
            };
        };

        case 'EDIT_INVOICE': {
            // Update the existing invoice or create a new array with the updated invoice
            return {
                ...state,
                invoiceData: state.invoiceData.map((item) =>
                    item.invoiceNumber === action.payload.invoiceNumber ? action.payload : item
                ),
            };
        };

        case 'DELETE_INVOICE': {
            // state.invoices = state.invoices.filter(item => item !== payload);  
            // return state;
            // Filter out the deleted invoice
            return {
                ...state,
                invoiceData: state.invoiceData.filter((item) => item !== action.payload),
            };
        };

        default:
        return state;
    }
};