import React from 'react';

class Email extends React.Component {
    render() {
        const { value, handlerChange } = this.props
        return (
            <label>
                Email:
            <input name='email' type='text' maxLength='50' required='required' value ={value} onChange={handlerChange} />
            </label>
        )
    }
}

export default Email;