import React from 'react';


class Square extends React.Component
{

    render()
    {
        const mystyle = 
        {
            'width': '100px',
            'height': '100px',
            'verticalAlign': 'top',
        }

        return <button style={mystyle} className="square" onClick={() => this.props.onClick() }>{this.props.value}</button>;
    }
    
}

export default Square;

