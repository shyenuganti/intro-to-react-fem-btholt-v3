import React from 'react';
import ShowCard from './ShowCard';
import preload from '../data.json';
import { Component } from 'react';

class Search extends Component {

  constructor (props) {
    super (props);
    this.state = {
        searchTerm: 'Want to find something?'
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange (event) {
      this.setState({ searchTerm: event.target.value});
  }

  render() {   
   return (  
        <div className="search"> 
            <header>
                <h1>svideo</h1>
                <input 
                    onChange={this.handleSearchTermChange} 
                    value={this.state.searchTerm} 
                    type="text" 
                    placeholder="Search"
                />
            </header>
            <div>
            { preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />) }
            </div>
        </div>
    );
  }
}

export default Search;