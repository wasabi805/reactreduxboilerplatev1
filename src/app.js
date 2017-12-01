import React from 'react';
import ReactDOM from 'react-dom';
const css = require('./style/app.scss');


console.log("Can you see me now? I'm from app.js running on webpack-dev-server." );

ReactDOM.render(
    <div>
        <h1>Can you see me? div is loading from app.js</h1>
    </div>,
    document.getElementById('root')
);