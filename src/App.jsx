import React, { useState} from 'react'
import Axios from 'axios'
import './App.css'

function App() {
const [change, setChange] = useState("");
const [choose, setChoose] = useState(false)
const [pokemon, setPokemon] = useState({
          name: "",
          species: "",
          type: "",
          hp: "",
          attack: "",
          defense: "",
          url: "",
});

const handleClick = () => {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${change}`).then((res)=> 
        setPokemon({
        name: change,
        species: res.data.species.name,
        type: res.data.types[0].type.name,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        url: res.data.sprites.front_default,
      })
      ).catch((error)=> console.log(error))
      setChoose(true);

}

  return (
    <>  
    <div className="layout">
          <div className="wrapper">
              <div className="box1input"> 
                <h1>Pokemon</h1>
                <input type="text" onChange={(event)=>setChange(event.target.value)} placeholder="Choose a pokemon..."/>
                <button onClick={()=>handleClick()}>Search Pokemon</button>
              </div>
              <div className="box2display"> 
              {!choose ? "Waiting for a PokeMon to Summon...":<>
                                <h1>{pokemon.name.toUpperCase()}</h1>
                                <img src={pokemon.url} />
                                <h3>Name: {pokemon.species.toUpperCase()}</h3>
                                <h3>Type: {pokemon.type}</h3>
                                <h3>Hp: {pokemon.hp}</h3>
                                <h3>Attack: {pokemon.attack}</h3>
                                <h3>Defense: {pokemon.defense}</h3>
                            </>}

              </div>
          </div>    
    </div>
    </>
  )
}

export default App
