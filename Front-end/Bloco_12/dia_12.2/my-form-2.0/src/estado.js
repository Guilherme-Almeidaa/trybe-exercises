import React from 'react';
import states from './dataStates.js'
class Estado extends React.Component {
    render() {
        const { value, handlerChange } = this.props
        return (
            <label>
                Estado:
                <select name='estado' required='required' value={value} onChange={handlerChange}>
                    <option value='' >Selecione</option>
                    {states.sort().map((item) => <option> {item}</option>)}
                </select>
            </label>
        )
    }
}

export default Estado;