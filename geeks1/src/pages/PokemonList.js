import React, { useState, useEffect } from 'react';

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');
                const data = await response.json();
                const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                    const pokemonResponse = await fetch(pokemon.url);
                    return await pokemonResponse.json();
                }));
                setPokemon(pokemonDetails);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка!</div>;
    }

    return (
        <div className="pokemon-list">
            {
                pokemon?(
                    pokemon.map((p) => (
                        <div key={p.id} className="pokemon-card">
                            <img src={p.sprites.front_default} alt={p.name}/>
                            <p>{p.name}</p>
                        </div>
                    ))
                ) : (
                    <span>Данные еще не пришли </span>
                )
            }

        </div>
    );
}

export default PokemonList;
