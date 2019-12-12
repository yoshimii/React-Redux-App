import axios from 'axios';

export const FETCHING_BEER = 'FETCHING_BEER';
export const FETCHED_BEER = 'FETCHED_BEER';
export const FETCH_BEER_FAIL = 'FETCH_BEER_FAIL';
// const API_KEY = (`${process.env.REACT_APP_API_KEY}`);
export const getBeer = () => dispatch => {
dispatch({ type: FETCHING_BEER });
axios.get('https://api.nasa.gov/planetary/apod?api_key=YaNmPQsvBBia9WGZ7K5mE8mqbstyqOYh5xBcZUga').then( res => {console.log(res)
    dispatch({ type: FETCHED_BEER, payload: res.data})
    }).catch(err => {
        dispatch({ type: FETCH_BEER_FAIL });
    });
};