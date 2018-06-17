import React from 'react';
import { Link } from 'react-router-dom'

const Search = () => (
 <div>   
    <h1 style={{ color:"blue" }}> Your Route works ..This is the search page.</h1>
    <Link to="/" style={{ color:"red" }}> Go to Homepage</Link>
</div>
);

export default Search;