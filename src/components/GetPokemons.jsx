import { useState, useEffect } from "react";
import handleScore from "./Score.jsx";

export default function GetPokemons({score, setScore, bestScore, setBestScore}){
   const [pokemons, setPokemons]=useState([]);

   useEffect(()=>{
      /* fetchData(); */
      // fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251")
      // .then((poke) => {
      //   return poke.json();
      // })
      // .then((list) => {
      //   setData(list.results);
      //   console.log(list);
      // })
      // .catch((error) => {
      //   console.error("Error fetching Pokemon:", error);
      // });
      const fetchPokemons= async()=>{
         const response= await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
         const data= await response.json();
         console.log(data);
         const pokemonData= await Promise.all(
            data.results.map(async (pokemon)=>{
               const pokemonRecord= await fetch(pokemon.url);
               return pokemonRecord.json();
            })
         );
         setPokemons(pokemonData);
         console.log(pokemonData);
      };
      fetchPokemons();
   },[pokemons]);

   // function handleCards(e, id){
   //    const cardName= e.target.id;
   //    console.log(cardName);
   //    const cardArray=[];
   //    if(cardName){
   //       cardArray.push(cardName);
   //    }
   //    for(let i=0; i<cardArray.length; i++){
   //       if(cardName===cardArray.length){}
   //    }
   // }
   function handleClick(e){
      if(!cardId.includes(e.target.id)){
         setCardId([...cardId, e.target.id]);
         setScore(+1);
         console.log(cardId, score);
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
                     <img id={pokemon.name} src={pokemon.sprites.front_default} alt={pokemon.name} />
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