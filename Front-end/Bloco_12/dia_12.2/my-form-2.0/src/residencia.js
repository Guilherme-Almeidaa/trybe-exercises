import React from 'react';

class Residencia extends React.Component {
    render() {
        const { handlerChange } = this.props
        return (
            <div>
                Residência:
                <label for='casa'>
                    <input type='radio' value='casa' id='casa' name='residencia' onClick={handlerChange} />
            Casa</label>
                <label for='apartamento'>
                    <input type='radio' value='apartamento' id='apartamento' name='residencia' onClick={handlerChange} />
            Apartamento</label>
            </div>
        )
    }
}

export default Residencia;