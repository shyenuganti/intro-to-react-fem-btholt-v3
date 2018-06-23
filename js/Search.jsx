import React from 'react';
import ShowCard from './ShowCard';
import { Component } from 'react';
import Header from './Header';


class Search extends Component {

  constructor (props) {
    super (props);
    this.state = {
        searchTerm: ''
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange (event) {
      this.setState({ searchTerm: event.target.value});
  }

  render() {   
   return (  
        <div className="search"> 
           <Header  showSearch 
                    handleSearchTermChange={this.handleSearchTermChange}
                    searchTerm={this.state.searchTerm} />
            <div>
            { this.props.shows
            .filter( show => `${show.title} ${show.description}`.toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase())>=0)
            .map(show => <ShowCard key={show.imdbID} {...show} />) }
            </div>
        </div>
    );
  }
}

export default Search;