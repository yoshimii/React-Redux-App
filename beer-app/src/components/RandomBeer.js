import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBeer } from '../actions';


const Beers = ({ getBeer, beer, isFetching, error}) => {
    useEffect(() => {
        getBeer();
    }, [getBeer]);
    
    if (isFetching) {
        return <h6>Fetching beer!</h6>;
    }
console.log(beer.title)
    return (
        <div>
            Beer: {beer.title}
            <button onClick={getBeer}>Get New Quote</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        beer: state.beer,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getBeer }
)(Beers);