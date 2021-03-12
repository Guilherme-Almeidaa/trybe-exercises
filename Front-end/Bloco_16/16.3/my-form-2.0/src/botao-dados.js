import React from 'react';

class BotaoDados extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false
        }
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerSubmit() {
        this.setState({
            valid: true
        })
    }
    render() {
        const { valid } = this.state
        const { value } = this.props
        return (
            <div className='button-submit' >
                <button onClick={this.handlerSubmit} >Enviar</button>
                <div>{valid ? value : ''}</div>
            </div>
        )
    }
}

export default BotaoDados;