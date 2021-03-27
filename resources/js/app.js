import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap'

const App = () => {
    return(
        <div>none</div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}