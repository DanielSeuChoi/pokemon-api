import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function FetchComponents() {
    const [pokemon, setPokemon] = useState([]);
    const axiosPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0").then(res => {
            setPokemon(res.data.results.map(p => p.name))
        })
    }
    return (
        <div>
            <button onClick={axiosPokemon}>Create</button>
            {pokemon.map(poke => (
                <ul key={poke}>
                    <li>{poke}</li>
                </ul>
            ))}
        </div>
    )
}
