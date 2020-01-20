import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Board from './component/board';

class App extends React.Component
{
    render()
    {
        return <div><Board /></div>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));