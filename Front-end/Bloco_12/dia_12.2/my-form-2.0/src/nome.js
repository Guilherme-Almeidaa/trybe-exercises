import React from 'react';

class Nome extends React.Component {
    render() {
        const { handlerChange ,value } = this.props
        return (
            <label>
                Nome:
                <input type='text' name='nome' maxLength='40' value={value.toUpperCase()} onChange={handlerChange } required='required' />
            </label>
        )
    }
}

export default Nome;