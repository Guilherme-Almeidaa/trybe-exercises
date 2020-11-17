import React from 'react';
import Nome from './nome.js'
import Email from './email.js';
import Cpf from './cpf.js'
import Endereço from './endereço.js'
import Cidade from './cidade.js';
import Estado from './estado.js'
import Residencia from './residencia.js'
import Currriculo from './currículo.js'
import Cargo from './cargo.js'
import DescricaoCargo from './descrição-cargo.js'
import BotaoDados from './botao-dados.js'
import Submit from './submit-form.js'

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            nome: '',
            email: '',
            cpf: '',
            endereço: '',
            cidade: '',
            estado: '',
            residencia: '',
            curriculo: '',
            cargo: '',
            descricaoCargo: '',
        }

        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerChange.bind(this);
        
    }
   
    

    handlerChange({ target }) {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }
    render() {
        
        return (
            <form>
                <fieldset className='form'>
                    <Nome value={this.state.nome} handlerChange={this.handlerChange} />
                    <Email value={this.state.email} handlerChange={this.handlerChange} />
                    <Cpf value={this.state.cpf} handlerChange={this.handlerChange} />
                    <Endereço value={this.state.endereço.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')} handlerChange={this.handlerChange} />
                    <Cidade value={this.state.cidade} handlerChange={this.handlerChange} />
                    <Estado value={this.state.estado} handlerChange={this.handlerChange} />
                    <Residencia value={this.state.residencia} handlerChange={this.handlerChange} />

                </fieldset>
                <fieldset className='form' >
                    <Currriculo value={this.state.curriculo} handlerChange={this.handlerChange} />
                    <Cargo value={this.state.cargo} handlerChange={this.handlerChange} />
                    <DescricaoCargo value={this.state.descricaoCargo} handlerChange={this.handlerChange} />
                </fieldset>
                <BotaoDados value= {Object.values(this.state).map((item) => <p>{item}</p>)}  />
                <Submit />
            </form>


        )
    }
}

export default Form;