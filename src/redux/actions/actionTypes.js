export const add_Invoice = (invoice) => {
    return {
        type: 'ADD_INVOICE',
        payload: invoice
    }
}

export const edit_Invoice = (invoice) => {
    return {
        type: 'EDIT_INVOICE',
        payload: invoice
    }
}

export const delete_Invoice = (invoice) => {
    return {
        type: 'DELETE_INVOICE',
        payload: invoice
    }
}