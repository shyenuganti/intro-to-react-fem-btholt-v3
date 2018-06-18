import React from 'react';
import {shape, string} from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right:10px;
`;

const ShowCard = (props) => (
   <Wrapper>
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