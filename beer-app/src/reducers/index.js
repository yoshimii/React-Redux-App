import { FETCHING_BEER, FETCHED_BEER, FETCH_BEER_FAIL } from '../actions';

const initialState = {
    beer: 'beer name',
    isFetching: false,
    error:''
};
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_BEER:
            return {
                ...state,
                isFetching: true,
                error: ''
            }

        case FETCHED_BEER:
            return {
                ...state,
                isFetching:false,
                beer: action.payload
            }
        case FETCH_BEER_FAIL:
            return {
                ...state,

            }
        
            default: return state;
    }
} 