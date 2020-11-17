import React from 'react';

class Cidade extends React.Component {
    render () {
        const {value , handlerChange} = this.props;
        return (
          <label>
              Cidade:
              <input name='cidade' type ='text' required='required' value = {value}  onChange={handlerChange} />
          </label>
        )
    }
}

export default Cidade;