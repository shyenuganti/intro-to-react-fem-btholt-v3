import React, { Component } from 'react';
import Header from './Header';

class Details extends Component {
    
    render(){
        return (
            <div className="details">
            <Header />
                <section>
                    <h1>{this.props.show.title}</h1>
                    <h2>({this.props.show.year})</h2>
                    <img src={`/public/img/posters/${this.props.show.poster}`} alt={`Poster for ${this.props.show.title}`} />
                    <p>{this.props.description}</p>
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