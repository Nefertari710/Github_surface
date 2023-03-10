import PokemonBox from "./PokemonBox";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [pokemonArray,setPokemonArray] = useState([]);
  
  // Create function addRandomPokemon 
  // If We want use await operation We need add async keyword in function declaration
  async function addRandomPokemon(){
    const rnd = Math.floor(Math.random()*1000) + 1;           
    // Math.random() create random number between 0 and 1 (excluding 1) each time it is called
    // Math.floor() will round a number down to the nearest integer.
    // Example: Math.floor(5.9) = 5
    // Math.floor(Math.random()*1000) + 1 will create [1, 1000] including 1 and 1000

    const url = `https://pokeapi.co/api/v2/pokemon/${rnd}`;
    // This url contain two part
    // The First part is fixed: "https://pokeapi.co/api/v2/pokemon/"
    // The Second part is changed by rnd.

    const response = await fetch(url);
    // "await" is used to wait for a Promise to resolve before render the result
    
    // fetch(url, options)
    // "url" is the URL of the resource you want to fetch
    // "options" include: "method" , "headers", "body" 
    
    const data = await response.json();
    // "response" is a method that is used to extract(提取) the JSON data from a "response" object.

    /**/ 
    const newPokemon = {
      id: uuid(),                       // uuid is used to create unique id
      originalName:data.name,
      name:data.name,
      image: data.sprites.front_default
    }

    // create PokemonArray
    setPokemonArray([ ...pokemonArray,newPokemon]);
    /* In the given code, "..." represents the spread syntax (扩展语法) or the spread operator （扩展运算符）in JavaScript. 
      It allows an iterable object （可迭代对象）(such as an array or a string) to be expanded （展开） into individual 
      elements. In this case, it spreads the existing pokemonArray array and adds newPokemon to the end of the spread 
      array to create a new array. */

    /* For example: pokemonArray = [ "Pikachu", "Charmander" ] newPokemon : "Bulbasaur" execute code: [ ...pokemonArray,newPokemon] 
      will create a new Array contain all elements such as [ "Pikachu", "Charmander" , "Bulbasaur" ] */
  }

  
  //Remove a Pokemon from the pokemonList
  function handleRemovePokemon(pokemon){
    if(pokemon.originalName !== pokemon.name) return;
    // If change the pokemon name, it will lead pokemon original name !== pokemon.name
    // So if you change your pokemon name you will not be able to remove it.
    const newArray = pokemonArray.filter((item) => item.id !== pokemon.id);
    //.filter() method to create an empty Array
    // (item) => item.id !== pokemon.id 
    // Means in the new Array will only Remove the pokemon which id is We click

    setPokemonArray(newArray);  //Set a newArray state for pokemonlist
  }


  function handleChangeNickname(pokemon,nickname){
    const index = pokemonArray.indexOf(pokemon);
    // Used to find the position index of the specified element in the array
    const newArray = [...pokemonArray];   // create new Array and copy all element from pokemonArray to newArray
    newArray[index] ={        // Access the element at the specified index in the newArray array.
      ...pokemon,             // Inherit(继承)the pokemon attribute
      name:nickname           // Change the name value to nickname
    }

    setPokemonArray(newArray);   //Set a newArray state for pokemonlist
  }

  // All the content displayed on the App interface(界面) is in this part.
  return (
    <div>
      <h1>My Pokemon</h1>   
      
      <button onClick = {addRandomPokemon}> Add random Pokemon</button>   
      {/* When user click the button, The system will call addRandomPokemon function*/}

      <PokemonBox onChangeNickname = {handleChangeNickname} onRemovePokemon = {handleRemovePokemon} pokemonArray={pokemonArray} />
      
    </div>
  )
}

export default App
