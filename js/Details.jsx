import React from 'react';

const Details = (props) => {
    return (
        <div className="details">
            <h1>Just Details!</h1>       
            <pre><code>{JSON.stringify(props, null,4)}</code></pre>
        </div>
    );
}

export default Details;     