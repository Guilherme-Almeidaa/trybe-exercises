import React from 'react';


class Cpf extends React.Component {
    render() {
        const {value , handlerChange} = this.props
        return (
            <label>
                Cpf:
                <input name='cpf' type='text' maxLength='11' required='required' value ={value} onChange={handlerChange} size='10' />
            </label>
        )
    }
}

export default Cpf;