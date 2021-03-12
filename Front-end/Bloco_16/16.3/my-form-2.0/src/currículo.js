import React from 'react';

class Curriculo extends React.Component {
    render() {
        const {value , handlerChange} = this.props
        return (
            <div className='curriculo'>
                Resumo do Currículo:
                <label>
                    <textarea type='text' maxLength='1000' required='required'  name='curriculo' value = {value} onChange={handlerChange} />
                </label>
            </div>

        )
    }
}

export default Curriculo;