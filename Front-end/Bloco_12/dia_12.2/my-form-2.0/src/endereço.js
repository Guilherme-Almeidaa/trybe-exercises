import React from 'react';

class Endereço extends React.Component {
    render() {
        const { value, handlerChange } = this.props
        return (
            <label>
                Endereço:
                <input name='endereço' type='text' required='required' maxLength='200' size='50' value={value} onChange={handlerChange} />
            </label>
        )
    }
}

export default Endereço;