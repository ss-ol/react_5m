import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DogCard from './DogCard';

function DogList({ dogs }) {
    return (
        <Row>
            {dogs.map((dog) => (
                <Col key={dog} md={4} className="mb-3">
                    <DogCard imageUrl={dog} />
                </Col>
            ))}
        </Row>
    );
}

export default DogList;
