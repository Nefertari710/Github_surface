import { useState } from "react";
import PokemonTile from "./PokemonTile";
import styles from './PokemonBox.module.css';

function PokemonBox({ pokemonArray,onRemovePokemon,onChangeNickname}){
    // parameter: pokemonArray is a pokemon Array
    // parameter: onRemovePokemon is a function 
    // parameter: onChangeNickname is a function 
    return(
        // className is used to change the browser css
        <div className={styles.container}>      
            {pokemonArray.map((pokemon) =>(
                <PokemonTile onChangeNickname={onChangeNickname} onRemovePokemon = {onRemovePokemon} key={pokemon.id} pokemon = {pokemon}/> 
            ))}
        </div>
    )
}

export default PokemonBox;