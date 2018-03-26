import React from 'react';

const Facility = (props) => {
    return (
        <div>
            <div><h2>{props.name}: {props.location}</h2></div>
        </div>
    );
};

export default Facility;