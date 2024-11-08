import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs, setSelectedBreed } from './store/actions/dogActions';
import DogList from './components/DogList';
import Filter from './components/Filter';
import Sort from './components/Sort';
import { Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs.dogs);
  const isLoading = useSelector((state) => state.dogs.isLoading);
  const error = useSelector((state) => state.dogs.error);
  const selectedBreed = useSelector((state) => state.dogs.selectedBreed);

  const [sortedDogs, setSortedDogs] = useState([]);

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  useEffect(() => {
    setSortedDogs(dogs[selectedBreed] || []);
  }, [dogs, selectedBreed]); // Обновление сортированных данных при изменении породы

  const handleBreedChange = (e) => {
    dispatch(setSelectedBreed(e.target.value));
  };

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (error) {
    return <h1>Ошибка: {error}</h1>;
  }

  return (
      <Container>
        <Row className="mb-3">
          <Col md={12}>
            <Filter
                selectedBreed={selectedBreed}
                setSelectedBreed={handleBreedChange}
                dogs={dogs}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <Sort dogs={sortedDogs} setDogs={setSortedDogs} />
          </Col>
        </Row>
        <DogList dogs={sortedDogs} />
      </Container>
  );
}

export default App;
