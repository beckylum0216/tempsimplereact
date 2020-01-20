import React from 'react';


class Square extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            value: "X",
        }
    }

    render()
    {
        const mystyle = 
        {
            'width': '100px',
            'height': '100px',
        }

        return <button style={mystyle} className="square" onClick={() => this.props.onClick()} >{this.props.value}</button>;
    }
    
}

export default Square;

