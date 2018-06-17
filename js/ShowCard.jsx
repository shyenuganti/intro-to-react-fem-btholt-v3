import React from 'react';
import {shape, string} from 'prop-types';

const ShowCard = (props) => (
    <div className='show-card'>
       <img alt={ `${props.title} Show Poster` } src={ `/public/img/posters/${props.poster}`} />       
         <div>
          <h3>{props.title}</h3>
          <h4>({props.year})</h4>
          <p>{props.description}</p>            
         </div>
    </div>
);

// PropTypes is no more included as part of React starting v15. 
// Mostly useful for documentation and dev time compilation errors
// Also checkout default props

ShowCard.propTypes = {
    poster:string.isRequired,
    title:string.isRequired,
    year:string.isRequired,
    description:string.isRequired
};

export default ShowCard;