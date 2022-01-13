import React from "react";
import './Card.css';
import 'animate.css';

const Card = ({name, email, id}) => {
    //const {name, email, id} = props;
    return (
        <div className="card-body animated shake">
            <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card; 