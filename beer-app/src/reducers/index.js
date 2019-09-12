import { FETCHING_BEER, FETCHED_BEER, FETCH_BEER_FAIL } from '../actions';

const initialState = {
    beer: {
        name:'beer name',
        abv:'',
        shortName: '',
        description:'',
        og: '',
        fg: ''
    },

    isFetching: null,
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
            default: return state;
    }
} 