import styles from './PokemonTile.module.css'

export default function PokemonTile({ pokemon,onRemovePokemon,onChangeNickname }){

    // If originName != name represent the pokemon has a Nickname
    const hasNickname = (pokemon.originalName !== pokemon.name);
    return(

        // class Name depending on the value of hasNickname
        // If the pokemon have a nickName the container css is styles.container and styles.nicknamed
        // If the pokemon have a nickName the container css is only styles.container
        <div className={hasNickname ? `${styles.container} ${styles.nicknamed}` : styles.container}>

            {/* double click will call onRemovepokemon function*/}
            <img onDoubleClick={() => onRemovePokemon(pokemon)} src = {pokemon.image} />
            
            {/* Init value == pokemon.name  */}
            {/* onChange is an event handler function that fires when the value of a form element changes */}
            {/* target.value: target is the textbox element, and the value attribute is the value in the current textbox. */}
            <input type = "text" value = {pokemon.name} onChange = {(e) => onChangeNickname(pokemon, e.target.value)} />
        </div>
    )
}

