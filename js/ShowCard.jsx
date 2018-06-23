import React from 'react';
import {shape, string} from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
    color: black;
    text-decoration: none;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right:10px;
`;

const ShowCard = (props) => (
   <Wrapper to={`/details/${props.imdbID}`}> 
       <Image alt={ `${props.title} Show Poster` } src={ `/public/img/posters/${props.poster}`} />       
         <div>
          <h3>{props.title}</h3>
          <h4>({props.year})</h4>
          <p>{props.description}</p>            
         </div>
    </Wrapper>
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