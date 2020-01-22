import React from 'react';


class Square extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            winFlag: false,
        }
    }

    render()
    {
        const myStyle = 
        {
            'width': '100px',
            'height': '100px',
            'verticalAlign': 'top',
        }

        const winStyle = 
        {
            'width': '100px',
            'height': '100px',
            'verticalAlign': 'top',
            'backgroundColor': '#B5F13C',
        }

        return <button style={this.props.winState ? winStyle : myStyle} className="square" onClick={() => this.props.onClick() }>{this.props.value}</button>;
    }
    
}

export default Square;

