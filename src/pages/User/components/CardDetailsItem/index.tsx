import React from 'react';

type Props = {
    text: string,
    description: string
}

const CardDetailsItem = ({text, description}: Props) => (
    <div>
        <h1> {text} </h1>
        <p> {description} </p>
    </div>
);

export default CardDetailsItem;