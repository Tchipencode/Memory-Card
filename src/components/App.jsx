import React from "react";
import {useState, useEffect} from "react";
import GetPokemons from "./GetPokemons.jsx";

export default function App(){
   const [score, setScore]=useState(0);
   const [bestScore, setBestScore]=useState(0);
   const [cardId, setCardId]=useState([]);

   return(
      <>
      <header>
         <h1>Memory Game</h1>
         <h4>Get point by clicking on an image once</h4>
         <div className="scores">
            <p className="score">Score: {score}</p>
            <p className="best-score">Best Score: {bestScore}</p>
         </div>
         <hr/>
      </header>
      
      <main>
         <GetPokemons 
         score={score} 
         setScore={setScore} 
         bestScore={bestScore}
         setBestScore={setBestScore}
         cardId={cardId}
         setCardId={setCardId}
         />
      </main>
      </>
   )

}