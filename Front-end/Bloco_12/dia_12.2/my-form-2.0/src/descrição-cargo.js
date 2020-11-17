import React from 'react';

class DescricaoCargo extends React.Component {
    render() {
        const { value , handlerChange} = this.props
        return (
            <label>
                Descrição do cargo:
             <input type ='text' name='descricaoCargo' value={value} onChange={handlerChange} />
            </label>
        )
    }
 
    
}

export default DescricaoCargo;