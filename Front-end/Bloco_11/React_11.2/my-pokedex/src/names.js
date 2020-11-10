import PropTypes from 'prop-types';
import React from 'react';
import './App.css'

class NamePoke extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.poke

        return (
            <div className='cont-pokemons' >
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
                </div>
                <img className='pokes' src={image} alt='Pokemon' />

            </div>)
    }
}



export default NamePoke;

NamePoke.propTypes = {
    poke: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string
        })
    })
}