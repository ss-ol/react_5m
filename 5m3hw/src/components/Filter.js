import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

function Filter({ selectedBreed, setSelectedBreed, dogs }) {
    const breeds = Object.keys(dogs);

    const handleBreedChange = (e) => {
        setSelectedBreed(e.target.value);
    };

    return (
        <Form>
            <Row className="mb-3">
                <Col md={12}>
                    <Form.Select value={selectedBreed || ''} onChange={handleBreedChange}>
                        <option value="">Все породы</option>
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
        </Form>
    );
}

export default Filter;
