import React from 'react';

class Cargo extends React.Component {
    render() {
        const {value , handlerChange} = this.props;
        return (
            <label>
                Cargo:
                <input name='cargo' type='text' maxLength='40' value={value} onChange={handlerChange} />
            </label>
        )
    }
}

export default Cargo;