import React from 'react';
import ReactDOM from 'react-dom';

const MyFirstComponent = function() {
    return React.createElement('div', null, React.createElement('h1', null, 'This is my first component!'));
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));