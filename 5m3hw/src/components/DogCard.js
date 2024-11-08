import React from 'react';
import { Card } from 'react-bootstrap';

function DogCard({ imageUrl }) {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
        </Card>
    );
}

export default DogCard;
