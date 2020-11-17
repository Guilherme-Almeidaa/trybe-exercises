import React from 'react';

class BotaoDados extends React.Component {
    render() {
        const { handlerSubmit, value } = this.props
        return (
            <div className='button-submit' >
                <button onClick={handlerSubmit} >Enviar</button>
                <div>{value}</div>
            </div>
        )
    }
}

export default BotaoDados;