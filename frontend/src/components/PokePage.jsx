import "./PokePage.css";
import Card from "./Card";
import { Button } from "@material-tailwind/react";
import {useEffect,useState} from 'react'

function PokePage() {
  const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
       
       
      })
      console.log(allPokemons)
    }
    createPokemonObject(data.results)
   
  }

 useEffect(() => {
  getAllPokemons()
 }, [])
  return (
    <div className="App">
      
   
      <div className="properties">
        {allPokemons.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
      
      <Button className="load-more" onClick={() => getAllPokemons()}  variant="gradient" fullWidth>
      Load More
    </Button>
    </div>
  );
}

export default PokePage;