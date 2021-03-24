import React from 'react';
import ReactDOM from 'react-dom';
import Ap from './Ap'

const App = () => {
    return(
        <Ap/>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}