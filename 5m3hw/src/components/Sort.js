import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function Sort({ dogs, setDogs }) {
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = (order) => {
        setSortOrder(order);
        const sortedDogs = [...dogs].sort((a, b) => {
            if (order === 'asc') {
                return a.localeCompare(b);
            } else {
                return b.localeCompare(a);
            }
        });
        setDogs(sortedDogs);
    };

    return (
        <ButtonGroup>
            <ToggleButton
                type="radio"
                name="sort-radio"
                value="asc"
                checked={sortOrder === 'asc'}
                onChange={() => handleSort('asc')}
            >
                По возрастанию
            </ToggleButton>
            <ToggleButton
                type="radio"
                name="sort-radio"
                value="desc"
                checked={sortOrder === 'desc'}
                onChange={() => handleSort('desc')}
            >
                По убыванию
            </ToggleButton>
        </ButtonGroup>
    );
}

export default Sort;
