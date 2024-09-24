import { useState, useEffect } from "react";

export default function GetPokemons({score, setScore, bestScore, setBestScore, cardId, setCardId}){
   const [pokemons, setPokemons]=useState([]);

   useEffect(()=>{
      const fetchPokemons= async()=>{
         try{
            const response= await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
            if(!response){
               throw new Error("Fetch data is not possible");
            }
            const data= await response.json();
            const pokemonData= await Promise.all(
               data.results.map(async (pokemon)=>{
                  const pokemonRecord= await fetch(pokemon.url);
                  return pokemonRecord.json();
               })
            );
            setPokemons(pokemonData);
         } catch(error){
            console.error(error);
         }

      };
      fetchPokemons();
   },[]);

   function shuffleArray(array){
      let newArray=array.slice();
      let currentIndex=array.length;
      while(currentIndex!==0){
         let randomIndex=Math.floor(Math.random()*currentIndex);
         currentIndex-=1;
         [newArray[currentIndex], newArray[randomIndex]]=[newArray[randomIndex], newArray[currentIndex]];
      }
      return newArray;
   }
   function handleClick(e){
      const newFinalList=shuffleArray(pokemons);
      setPokemons(newFinalList);
      if(!cardId.includes(e.target.id)){
         setCardId([...cardId, e.target.id]);
         setScore(score+1);
      } else{
         setCardId([]);
         setBestScore(bestScore< score ? score: bestScore);
         setScore(0);
      }   
   }

   return(
      <>
         <div className="cards-content">
            {pokemons?(
               pokemons.map((pokemon)=>(
                  <div key={pokemon.id} className="card-item" onClick={handleClick}>
                     <div className="img-div">
                     <img id={pokemon.name} src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                     </div>
                     <h3>{pokemon.name}</h3>
               </div>
               ))

            ):(
               <div>Loading..</div>
            )}

         </div>

      </>
   );

};