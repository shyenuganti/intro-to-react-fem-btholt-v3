import React from 'react';

const Details = (props) => {
    console.log(props);
    const {title, description, year, poster, trailer} = props.show;
    return (
        <div className="details">
            <h1>Just Details!</h1>       
            <header>
                <h1>svideo</h1>
            </header>
            <section>
                <h1>{title}</h1>
                <h2>({year})</h2>
                <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
                <p>{description}</p>
            </section>
            <div>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${trailer}?
                  rel=0&amp;
                  controls=0&amp;
                  showinfo=0`}
                  frameBorder="0"
                  allowFullScreen
                  title={`Trailer for ${title}`}
                />
            </div>
        </div>
    );
}

export default Details;     