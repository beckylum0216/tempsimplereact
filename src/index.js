import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from './component/game';

class App extends React.Component
{
    render()
    {
        return <div><Game /></div>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));