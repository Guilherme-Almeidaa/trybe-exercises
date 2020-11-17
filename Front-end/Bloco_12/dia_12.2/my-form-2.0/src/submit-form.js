import React from 'react' ;


class Submit extends React.Component {
    render () {
        const { value } =this.props
        return (
        <div>{value}</div>
        )
    }
}

export default Submit;