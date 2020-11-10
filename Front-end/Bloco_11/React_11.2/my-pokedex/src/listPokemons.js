import React from 'react';
import NamePoke from './names';
import './App.css'
import PropTypes from 'prop-types';

class ListPokemons extends React.Component {
    render() {
        const { poke } = this.props

        return (
            <div className='pokedex'>
                <h1 className='title'>Pokedex</h1>
                <div className='pokemon'>

                    {poke.map((pokemon, index) => <NamePoke key={index} poke={pokemon} />)}
                </div>
            </div>
        )
    }
}

export default ListPokemons;


ListPokemons.propTypes = {
    poke: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string
        })

    }))
}
