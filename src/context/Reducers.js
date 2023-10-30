import { ADD_TO_CART, ADJUST_QTY, CLEAR_FILTERS, FILTER_BY_DELIVERY, FILTER_BY_RATING, FILTER_BY_SEARCH, FILTER_BY_STOCK, REMOVE_FROM_CART, SORT_BY_PRICE } from "./ActionType";

export const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            return {...state, cart: [...state.cart, {...action.payload, qty: 1}]};
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.filter(c => c.id !== action.payload.id)};
        case ADJUST_QTY:
            return {...state, cart: state.cart.map(c => c.id === action.payload.id ? {...c, qty: +action.payload.qty} : c)};
    
        default:
            return state;
    }
}

export const FilterReducer = (state, action) => {
    switch (action.type) {
        case SORT_BY_PRICE:
            return {...state, sort: action.payload};
        case FILTER_BY_STOCK:
            return {...state, byStock: !state.byStock};
        case FILTER_BY_DELIVERY:
            return {...state, byFastDelivery: !state.byFastDelivery};
        case FILTER_BY_RATING:
            return {...state, byRating: action.payload};
        case FILTER_BY_SEARCH:
            return {...state, searchQuery: action.payload};
        case CLEAR_FILTERS:
            return {
                byStock : false,
                byFastDelivery : false,
                byRating : 0,
                searchQuery : ""
            }
        default:
            return state;
    } 
}