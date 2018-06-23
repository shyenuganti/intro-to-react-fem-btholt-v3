import React, { Component } from 'react';
import Header from './Header';
import Spinner from './Spinner';
import axios from 'axios';

class Details extends Component {

    constructor (props) {
        super (props);
        this.state = {
            rating: ''
        };
    }
        
    componentDidMount(){
        axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
        .then( (response) => {
            console.log(response);
            this.setState( { apiData: response.data } );
        });
    }

    render(){

        let ratingComponent;
        if(this.state.apiData){
            ratingComponent = <h3>{this.state.apiData.rating}</h3>
        } else {
            ratingComponent = <Spinner />
        }

        return (
            <div className="details">
            <Header />
                <section>
                    <h1>{this.props.show.title}</h1>
                    <h2>({this.props.show.year})</h2>
                    {ratingComponent}
                    <img src={`/public/img/posters/${this.props.show.poster}`} alt={`Poster for ${this.props.show.title}`} />
                    <p>{this.props.show.description}</p>
                </section>
                <div>
                    <iframe
                    src={`https://www.youtube-nocookie.com/embed/${this.props.show.trailer}?
                    rel=0&amp;
                    controls=0&amp;
                    showinfo=0`}
                    frameBorder="0"
                    allowFullScreen
                    title={`Trailer for ${this.props.show.title}`}
                    />
                </div>
            </div>
        )
    };
}

export default Details;     